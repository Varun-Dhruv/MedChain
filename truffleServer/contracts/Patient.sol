// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;
import "./User.sol";

contract Patient is User {
    uint public patientCount = 0;
    struct patient {
        uint256 id;
        string firstName;
        string lastName;
    }
    mapping(address => patient) public patientList;

    event PatientRegistered(
        uint256 _patientid,
        string _firstName,
        string _lastName
    );

    function registerPatient(string memory _firstName, string memory _lastName)
        public
    {
        require((patientCount >= 0)); // Make sure the file hash exists

        require((bytes(_firstName).length > 0)); // Make sure file type exists

        require((bytes(_lastName).length > 0));

        patientCount++;

        patientList[msg.sender] = patient(patientCount, _firstName, _lastName);

        emit PatientRegistered(patientCount, _firstName, _lastName);
    }

    function getPatient() public view returns (patient memory) {
        return patientList[msg.sender];
    }

    constructor() {}
}
