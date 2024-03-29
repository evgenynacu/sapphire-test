import * as ethers from "ethers";

const hre = require("hardhat");
import { BaseContract, Contract, ContractFactory } from "@ethersproject/contracts";
import {sleep} from "@nomicfoundation/hardhat-verify/internal/utilities";
async function main() {
    console.log("deploying contract")

    let contract: Contract = (await hre.ethers.deployContract(
      "TestPrivacy",
      []
    ))

    // verify
    console.log("deployed", contract)
    await sleep(5000);
    console.log("verify")
    await hre.run("verify:verify", {
        address: contract.target,
        constructorArguments: [],
    });
    console.log("verify done")
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});
