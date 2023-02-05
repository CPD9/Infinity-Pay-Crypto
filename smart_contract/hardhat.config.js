require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity: '0.8.9',
  networks: {
    goerli: {
      url: 'https://eth-goerli.g.alchemy.com/v2/S6SHNhAplHA5IIABUh1FKXdK2q-g62kI',
      accounts: [ 'ea1f61df02d9f772b5ac52adcb2115043beb27408e752b355b72f28fc21e6b6d' ]
    }
    
  }
}