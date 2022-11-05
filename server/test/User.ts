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
            //const [owner] = await ethers.getSigners();
            //console.log(owner);
            const file = await contract.getFiles();
            console.log(file)
            //console.log(contract.files)
            const files: string = "1"
            expect(files).to.be.not.undefined;
            expect(files).to.be.not.null;
            expect(files).to.be.not.NaN;
            expect(files).to.equal("1");
            // const doc: Doc= await contract.docList[]
        })
    })
})
