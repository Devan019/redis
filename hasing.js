import redis from "./client.js";

async function hasingOps() {
  const hash = await redis.hset("todo:1" ,{
    id : 1,
    title : "sample todo",
    description : "this is just a sample todo",
    iscompleted : false
  })

  const id = await redis.hget("todo:1" , "id");
  const title = await redis.hget("todo:1", "description");

  const sometodo = await redis.hmget("todo:1", "id", "title", "iompleted");

  const todo = await redis.hgetall("todo:1");

  console.log(id, title, sometodo, todo);


}

hasingOps()