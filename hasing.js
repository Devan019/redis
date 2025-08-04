import redis from "./client.js";

async function hasingOps() {
  const hash = await redis.hset("todo:1" ,{
    id : 1,
    title : "sample todo",
    description : "this is just a sample todo",
    iscompleted : false
  })


}

hasingOps()