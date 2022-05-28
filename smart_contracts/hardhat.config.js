//https://eth-ropsten.alchemyapi.io/v2/-Nz2ZIbNIOdIC-F4N-ByMU55zxRNT2kP
require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.13",
  networks: {
    ropsten: {
      url: "https://eth-ropsten.alchemyapi.io/v2/-Nz2ZIbNIOdIC-F4N-ByMU55zxRNT2kP",
      accounts: [
        "a07540f1a92c5b75ff2f886a2dec8cc6fe2f6a3e4d46538e21dab97ace6b4960",
      ],
    },
  },
};
