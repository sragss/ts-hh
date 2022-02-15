import "@nomiclabs/hardhat-ethers";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";
import "hardhat-gas-reporter";

import { HardhatUserConfig } from "hardhat/types";

let config: HardhatUserConfig = {
  solidity: "0.8.0",
};

export default config;