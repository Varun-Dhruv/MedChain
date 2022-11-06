// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;
import "./User.sol";

contract Doctor is User {
    uint public docCount = 0;
    struct doc {
        uint256 id;
        string firstName;
        string lastName;
    }
    mapping(address => doc) public docList;

    constructor() {}

    event DocRegistered(uint256 _docid, string _firstName, string _lastName);

    function registerDoc(string memory _firstName, string memory _lastName)
        public
    {
        require((docCount >= 0)); // Make sure the file hash exists

        require((bytes(_firstName).length > 0)); // Make sure file type exists

        require((bytes(_lastName).length > 0));

        docCount++;

        docList[msg.sender] = doc(docCount, _firstName, _lastName);

        emit DocRegistered(docCount, _firstName, _lastName);
    }

    function getDoc() public view returns (doc memory) {
        return docList[msg.sender];
    }
}
