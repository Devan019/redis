
/** all string operations */

import redis from "./client.js";

async function stringOps() {
  const val =  await redis.get("name:2");
  console.log("Value of key:", val);
}

stringOps().catch(console.error);