const HDWalletProvider = require('@truffle/hdwallet-provider');
const fs = require('fs');
module.exports = {
  mocha: {},
  compilers: {
    solc: {
      version: '0.8.17'
    }
  },
  networks: {
    loc_development_development: {
      network_id: "*",
      port: 7545,
      host: "127.0.0.1"
    },
    loc_instagram_instagram: {
      network_id: "*",
      port: 7545,
      host: "127.0.0.1"
    },
    inf_Instagram_goerli: {
      network_id: 5,
      gasPrice: 100000000000,
      provider: new HDWalletProvider(fs.readFileSync('c:\\Users\\ivars\\OneDrive\\Desktop\\Projects\\Web3.0-instagram\\.env', 'utf-8'), "https://goerli.infura.io/v3/aaf1955174194b869198c3ba45aaa096")
    }
  }
};
