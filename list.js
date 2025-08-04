import redis from "./client.js";

async function listops() {
  const val = await redis.lindex("stack2" , 1); //1 index
  console.log(val)
}

listops()