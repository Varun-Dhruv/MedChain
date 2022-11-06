const Doctor = artifacts.require("Doctor");
const User = artifacts.require("User");
const Patient = artifacts.require("Patient");

module.exports = async function(deployer) {
	await deployer.deploy(Doctor);
    await deployer.deploy(User);
    await deployer.deploy(Patient);
};