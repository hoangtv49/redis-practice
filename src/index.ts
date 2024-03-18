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
  // const res1 = await client.lPush('bikes:repairs', 'bike:1');
  // const res2 = await client.lPush('bikes:repairs', 'bike:2');

  // console.log(await client.rPop('bikes:repairs'));
  // console.log(await client.rPop('bikes:repairs'));

  // Act as stack
  // console.log(await client.lPop('bikes:repairs'));
  // console.log(await client.lPop('bikes:repairs'));

  // Length of list
  // console.log(await client.lLen('bikes:repairs'));

  // Sets
  // console.log(await client.sAdd('bikes:repairs1', 'bikie'));
  // console.log(await client.sAdd('bikes:repairs2', 'bikie'));

  // console.log(await client.sIsMember('bikes:repairs1', 'bikie'));
  // console.log(await client.sInter(['bikes:repairs1', 'bikes:repairs2']));
  // console.log(await client.sCard('bikes:repairs1'));

  // Hashes
  // console.log(
  //   await client.hSet('bike1', {
  //     name: 'thong nhat',
  //     owner: 'hoang',
  //     price: 10000,
  //   })
  // );
  // console.log(await client.hGet('bike1', 'name'));
  // console.log(await client.incrBy('bike1:price', 1000));
  // console.log(await client.hGet('bike1', 'price'));

  // Sorted Sets
  // console.log(await client.zAdd('bike1', { score: 3, value: 'value' }));
  // console.log(await client.zAdd('bike1', { score: 2, value: 'value2' }));
  // console.log(await client.zRange('bike1', 0, -1));


  await client.disconnect();
  console.log('disconnected from redis!');
})();
