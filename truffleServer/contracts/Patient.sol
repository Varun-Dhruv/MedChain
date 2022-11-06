// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;

contract Patient {
    uint public patientCount = 0;
    struct patient {
        uint256 id;
        uint256 dob;
        string firstName;
        string lastName;
    }
    mapping(address => patient) public patientList;

    event PatientRegistered(
        uint256 _docid,
        uint256 _dob,
        string _firstName,
        string _lastName
    );

    function registerPatient(
        uint _dob,
        string memory _firstName,
        string memory _lastName
    ) public {
        require((patientCount >= 0)); // Make sure the file hash exists

        require((bytes(_firstName).length > 0)); // Make sure file type exists

        require((bytes(_lastName).length > 0));

        patientCount++;

        patientList[msg.sender] = patient(
            patientCount,
            _dob,
            _firstName,
            _lastName
        );

        emit PatientRegistered(patientCount, _dob, _firstName, _lastName);
    }

    function getPatient() public view returns (patient memory) {
        return patientList[msg.sender];
    }

    constructor() {}
}
