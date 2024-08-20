require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: '0.8.4',
  etherscan: {
   apiKey: 'YNMAC7ZPBYB31VRCZQM7U1EAWGTAX8CYGC',
  },
  networks: {
    sepolia : {
      url: 'https://eth-sepolia.g.alchemy.com/v2/4kKjSW2KihPnbSPhzGz1NsOTCwFc6zTn',
      accounts: [
        'e064db4cdac79e68d46a70fa8169917e41ecf84c046e09cb8acd2f5bfebecf58',
      ],
    },
  },
}