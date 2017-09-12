module.exports = {
  networks: {
    development: {
      host: "localhost",
      port: 8545,
      network_id: "*" // Match any network id
    },
    ropsten: {
      host: "localhost",
      port: 8545,
      network_id: "*", // Match any network id
      from: "0xc79aee2dce905dba6a15ecea8669b4d990c9ebdf",
      gas: 4700000,
      gasPrice: 200
    },
    live: {
      host: "localhost",
      port: 8545,
      network_id: "*",
      from: "0xcCf2FBd7680385210Dac06D3969b8F4DA25b55b9",
      gasPrice: 20
    }
  }
};
