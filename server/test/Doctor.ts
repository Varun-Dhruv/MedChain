import { expect } from "chai";
import { BigNumber } from "ethers";
import { ethers } from "hardhat";
import { string } from "hardhat/internal/core/params/argumentTypes";
import { it } from "mocha";
import { Doctor } from "../typechain-types/Doctor.sol/Doctor"
import { Doc } from "../types/Doc"
describe("Doctor", () => {
    let contract: Doctor;
    beforeEach(async () => {
        const Doctor = await ethers.getContractFactory("Doctor");
        contract = await Doctor.deploy();
    });

    describe("docId", async () => {
        it("should return 0", async () => {
            //await contract.deployed();
            const docCount = await contract.docCount();
            expect(docCount).to.be.not.undefined;
            expect(docCount).to.be.not.null;
            expect(docCount).to.be.not.NaN;
            expect(docCount).to.equal(0);
        });
    });
    describe('registerDoc', () => {
        it("return incremented count", async () => {
            //await contract.deployed();
            const initialDocCount = await contract.docCount();
            expect(initialDocCount).to.be.not.undefined;
            expect(initialDocCount).to.be.not.null;
            expect(initialDocCount).to.be.not.NaN;
            await contract.registerDoc(111111111, "Varun", "Koranne");
            
            const docCount = await contract.docCount();
            expect(docCount).to.be.not.undefined;
            expect(docCount).to.be.not.null;
            expect(docCount).to.be.not.NaN;
            expect(docCount).to.greaterThan(initialDocCount);
            // const doc: Doc= await contract.docList[]
        })
    })
})