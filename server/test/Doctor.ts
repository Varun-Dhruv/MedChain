import { expect } from "chai";
import { ethers } from "hardhat";
import { Doctor } from "../typechain-types/Doctor"
describe("Doctor", () => {
    let contract: Doctor;
    beforeEach(async () => {
        const Doctor = await ethers.getContractFactory("Doctor");
        contract = await Doctor.deploy();
        await contract.deployed();
    });
    describe("docId", () => {
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
            await contract.registerDoc("Varun", "Koranne");

            const docCount = await contract.docCount();
            expect(docCount).to.be.not.undefined;
            expect(docCount).to.be.not.null;
            expect(docCount).to.be.not.NaN;
            expect(docCount).to.greaterThan(initialDocCount);
            // const doc: Doc= await contract.docList[]
        })
    })
})