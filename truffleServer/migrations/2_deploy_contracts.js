const Doctor = artifacts.require("Doctor");
const User = artifacts.require("User");
const Patient = artifacts.require("Patient");

module.exports = function(deployer) {
	deployer.deploy(Doctor);
    deployer.deploy(User);
    deployer.deploy(Patient);
};