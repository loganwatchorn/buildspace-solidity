require("@nomiclabs/hardhat-waffle");
require("@nomiclabs/hardhat-ethers");

require('dotenv').config();

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
// task("accounts", "Prints the list of accounts", async (taskArgs, hre) => {
//   const accounts = await hre.ethers.getSigners();
//
//   for (const account of accounts) {
//     console.log(account.address);
//   }
// });

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more


/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  defaultNetwork: "mumbai",
  networks: {
    hardhat: {},
    localhost: {},
    mumbai: {
      url: process.env.API_URL,
      accounts: [`0x${process.env.PRIVATE_KEY}`]
    },
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/Gb-eccoxju1O5rg09FSnMSkYoAIW5beP",
      accounts: [process.env.PRIVATE_KEY]
    },
  },
  solidity: "0.8.9",
}
