import redis from "./client.js";

async function queueOps() {
  await redis.lpush("queue2",10); //10
  await redis.lpush("queue2", 20); //20 10
  await redis.lpush("queue2", 15 , 30); // 30 15 20 10

  let list = await redis.lrange("queue2", 0, -1); //whole queue
  console.log(list);

  const popele = await redis.rpop("queue2"); //pop ele into queue
  list = await redis.lrange("queue2", 0, -1);

  console.log("pop ", popele);
  console.log(list);

}
queueOps();