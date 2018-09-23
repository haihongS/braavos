export default {
  bech32: false,
  btc: {
    confThreshold: 2,
    fee: {
      confTarget: 6,
      txSizeKb: 0.4,
    },
    withdrawalStep: 512,
  },
  rpc: {
    host: process.env.OMNICORED_HOST || 'localhost',
    network: process.env.OMNICORED_NETWORK || 'regtest',
    password:
      process.env.OMNICORED_PASSWORD ||
      'J2fqb-r8YdvESyLK8DkMQCJBOyEhlRWI3VuYrul8bYI=',
    username: process.env.OMNICORED_USERNAME || 'test',
  },
  usdt: {},
};
