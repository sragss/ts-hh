import { ethers } from "hardhat";
import { NFT__factory } from "../typechain-types";
import { abi as ERC20_ABI, bytecode as ERC20_BYTECODE } from "@openzeppelin/contracts/build/contracts/ERC20.json";
import { ContractFactory } from "ethers";
import { expect } from "chai";

describe("test title", () => {
    it("deploys the NFT", async () => {
        let [signer1, signer2] = await ethers.getSigners()
        let factory = new NFT__factory(signer1)
        let nftDeploy = await factory.deploy()
        console.log(`NFT address (not deployed yet): ${nftDeploy.address}`)
        await nftDeploy.deployTransaction.wait()

        // Contract now safe to use
        let name = await nftDeploy.name()
        expect(name).to.be.eq("Dont collect this")
    })

    it("deploys the ERC20", async () => {
        let [signer1, signer2] = await ethers.getSigners()
        let erc20Factory = new ContractFactory(ERC20_ABI, ERC20_BYTECODE, signer2)
        let erc20Deploy = await erc20Factory.deploy("ERC20Name", "ERC20Symbol")
        console.log(`ERC20 address (not deployed yet): ${erc20Deploy.address}`)
        await erc20Deploy.deployTransaction.wait()

        let symbol = await erc20Deploy.symbol()
        expect(symbol).to.be.eq("ERC20Symbol")
    })
})