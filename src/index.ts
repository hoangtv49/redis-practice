import { createClient } from 'redis';

(async () => {
  const client = await createClient().connect();
  console.log('connected to redis!');

  // Data Types
  // String
  await client.set('string', 'hello redis');

  // JSON
  await client.set(
    'json',
    JSON.stringify({ learner: 'Hoang', subject: 'redis', score: 10 })
  );

  // Lists
  // Act as queue
  const res1 = await client.lPush('bikes:repairs', 'bike:1');
  const res2 = await client.lPush('bikes:repairs', 'bike:2');

  // console.log(await client.rPop('bikes:repairs'));
  // console.log(await client.rPop('bikes:repairs'));

  // Act as stack
  // console.log(await client.lPop('bikes:repairs'));
  // console.log(await client.lPop('bikes:repairs'));

  // Length of list
  console.log(await client.lLen('bikes:repairs'));

  await client.disconnect();
  console.log('disconnected from redis!');
})();
