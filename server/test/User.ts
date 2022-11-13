import { expect } from "chai";
import { ethers } from "hardhat";
import { BigNumber } from "ethers";
import { User } from "../typechain-types/User"
describe("User", async () => {
    //console.log("hel")
    let contract: User;
    beforeEach(async () => {
       // console.log("Hello")
        const User = await ethers.getContractFactory("User");
        contract = await User.deploy();
        await contract.deployed();

    });
    describe('uploadFile', () => {
        it("return incremented count", async () => {

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
    describe('setUserType', () => {
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
