// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;
import "./User.sol";

contract Doctor is User {
    uint public docCount = 0;
    struct doc {
        uint256 id;
        uint256 dob;
        string firstName;
        string lastName;
    }
    mapping(address => doc) public docList;

    constructor() {
    }

    event DocRegistered(
        uint256 _docid,
        uint256 _dob,
        string _firstName,
        string _lastName
    );

    function registerDoc(
        uint _dob,
        string memory _firstName,
        string memory _lastName
    ) public {
        require((docCount >= 0)); // Make sure the file hash exists

        require((bytes(_firstName).length > 0)); // Make sure file type exists

        require((bytes(_lastName).length > 0));

        docCount++;

        docList[msg.sender] = doc(docCount, _dob, _firstName, _lastName);

        emit DocRegistered(docCount, _dob, _firstName, _lastName);
    }
    
}
