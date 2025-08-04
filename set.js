import redis from "./client.js";

async function setops() {
  await redis.sadd("set:1", 10,30,25,10,35,30);
  await redis.sadd("set:2", 15,10,20,30);
  let members = await redis.smembers("set:1");
  let members2 = await redis.smembers("set:2");
  console.log("set:1 ",members);
  console.log("set:2 ",members2);

  const eles = await redis.scard("set:1"); //size
  console.log("eles are of set:1 - scard  ", eles)

  const diff = await redis.sdiff("set:1", "set:2")
  console.log("diff is ", diff);

  const ismember = await redis.sismember("set:1", 20)
  console.log("20 ismember of set:1" , ismember);

  await redis.spop("set:1");
  members = await redis.smembers("set:1");
  console.log("after remnoving one ele in set:1", members);

  const randomMember = await redis.randomkey();
  console.log("random member from set:1", randomMember);

  await redis.srem("set:2", 15);
  members2 = await redis.smembers("set:2");
  console.log("after removing 15 from set:2", members2);

  const union = await redis.sunion("set:1" , "set:2");
  console.log("union of set:1 and set:2", union);


}

setops().catch(console.error);