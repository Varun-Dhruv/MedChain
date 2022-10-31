// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;

contract Doctor {
    struct doc{
        uint256 id;
        uint256 dob;
    }

    constructor() {}

   event DocRegistered();
}
