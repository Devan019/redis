
/**stacks ops */

import redis from "./client.js";

async function stackOps() {
  await redis.lpush("stack2",10); //10
  await redis.lpush("stack2", 20); //20 10
  await redis.lpush("stack2", 15 , 30); // 30 15 20 10

  let list = await redis.lrange("stack2", 0, -1); //whole stack
  console.log(list);

  const popele = await redis.lpop("stack2"); //pop ele into stack
  list = await redis.lrange("stack2", 0, -1);

  console.log("pop ", popele);
  console.log(list);

}
stackOps();

