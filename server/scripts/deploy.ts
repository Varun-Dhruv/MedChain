const hre = require("hardhat");

const main = async () => {
  const fileFactory = await hre.ethers.getContractFactory("File");
  const fileContract = await fileFactory.deploy();

  await fileContract.deployed();
  console.log("Transactions address: ", fileContract.address);
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

runMain();