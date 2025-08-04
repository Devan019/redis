import redis from "./client.js";

async function sorted_set() {
  await redis.sadd("sorted_set1", 10, 30, 20, 10, 40, 5); // Add elements 10, 20, 30
  await redis.sadd("sorted_set2", 15, 10, 25, 30); // Add elements 15, 20, 30

  let members1 = await redis.smembers("sorted_set1");
  let members2 = await redis.smembers("sorted_set2");


  console.log("sorted_set1 members:", members1);
  console.log("sorted_set2 members:", members2);

  const size1 = await redis.scard("sorted_set1"); // Get size of sorted_set1
  console.log("Size of sorted_set1:", size1);

  const size2 = await redis.scard("sorted_set2"); // Get size of sorted_set2
  console.log("Size of sorted_set2:", size2);

  const diff = await redis.sdiff("sorted_set1", "sorted_set2"); // Difference between sorted_set1 and sorted_set2
  console.log("Difference (sorted_set1 - sorted_set2):", diff);

  const isMember = await redis.sismember("sorted_set1", 20); // Check if 20 is a member of sorted_set1
  console.log("Is 20 a member of sorted_set1?", isMember);

  const isMember2 = await redis.sismember("sorted_set2", 20); // Check if 20 is a member of sorted_set2
  console.log("Is 20 a member of sorted_set2?", isMember2);

  await redis.spop("sorted_set1"); // Remove a random element from sorted_set1
  members1 = await redis.smembers("sorted_set1");
  console.log("After removing a random element from sorted_set1:", members1);

  const randomMember = await redis.randomkey(); // Get a random member from any set
  console.log("Random member from any set:", randomMember);

  await redis.srem("sorted_set2", 15); // Remove 15 from sorted_set2
  members2 = await redis.smembers("sorted_set2");
  console.log("After removing 15 from sorted_set2:", members2);

  const union = await redis.sunion("sorted_set1", "sorted_set2"); // Union of sorted_set1 and sorted_set2
  console.log("Union of sorted_set1 and sorted_set2:", union);


}

sorted_set().catch(console.error);