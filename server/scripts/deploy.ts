const hre = require("hardhat");

const main = async () => {
  const doctorFactory = await hre.ethers.getContractFactory("Doctor");
  const doctorContract = await doctorFactory.deploy();

  await doctorContract.deployed();
  console.log("Transactions address: ", doctorContract.address); 

  const patientFactory = await hre.ethers.getContractFactory("Patient");
  const patientContract = await patientFactory.deploy();

  await patientContract.deployed();
  console.log("Transactions address: ", patientContract.address);

  const userFactory = await hre.ethers.getContractFactory("User");
  const userContract = await userFactory.deploy();

  await userContract.deployed();
  console.log("Transactions address: ", userContract.address);
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