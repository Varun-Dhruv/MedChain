// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;

contract File {
    struct File {
        uint256 field;
        string fileHash;
        uint256 fileSize;
        string fileType;
        string fileName;
        uint256 uploadTime;
        address payable uploader;
    }
    constructor(){
        
    }
}
