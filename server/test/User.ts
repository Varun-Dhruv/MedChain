import { expect } from "chai";
import { ethers } from "hardhat";
import { it } from "mocha";
import { BigNumber } from "ethers";
import { User } from "../typechain-types/User"
import { Contract } from "ethers";
let contract: User

describe("User", () => {
    let contract: User
    beforeEach(async () => {
        const User = await ethers.getContractFactory("User");
        contract = await User.deploy();
    });
    describe('uploadFile', async () => {
        it("return incremented count", async () => {
            //await contract.deployed();
            const initialFileCount: BigNumber = await contract.fileCount();
            expect(initialFileCount).to.be.not.undefined;
            expect(initialFileCount).to.be.not.null;
            expect(initialFileCount).to.be.not.NaN;
            //console.log(await contract.signer.getAddress())
            //_fileHash, uint _fileSize, string memory _fileType, string memory _fileName
            await contract.uploadFile("nownvpinb", 12345, "application/pdf", "report");

            const finalFileCount: BigNumber = await contract.fileCount();

            expect(finalFileCount).to.be.not.undefined;
            expect(finalFileCount).to.be.not.null;
            expect(finalFileCount).to.be.not.NaN;
            expect(finalFileCount).to.greaterThan(initialFileCount);
        })
    })
    describe('setUserType', async () => {
        it("return userType ", async () => {
            await contract.setUserType("Doctor");
            const userTypeDoc: string = await contract.getUserType();
            expect(userTypeDoc).to.be.not.undefined;
            expect(userTypeDoc).to.be.not.null;
            expect(userTypeDoc).to.be.not.NaN;
            expect(userTypeDoc).to.equal("Doctor");
        })
    })
})
