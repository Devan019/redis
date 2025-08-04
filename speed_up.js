import e from 'express'
import axios from 'axios';
import redis from './client.js';

const app = e();

app.get("/",async(req,res) => {
  const cacheusers = await redis.get("users");
  if(cacheusers) return res.json(JSON.parse(cacheusers));

  const api = await axios.get("https://jsonplaceholder.typicode.com/users");
  const data = api.data;
  await redis.set("users", JSON.stringify(data))
  await redis.expire("users", 60*5); //for test 5min
  return res.json(api.data)
})

app.listen(3000, () => {
  console.log("http://localhost:3000")
})