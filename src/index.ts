import { createClient } from 'redis';

(async () => {
  const client = await createClient().connect();
  console.log('connected to redis!');

  await client.set('key', 'value');
  const value = await client.get('key');
  console.log(value);

  await client.disconnect();
  console.log('disconnected from redis!');
})();
