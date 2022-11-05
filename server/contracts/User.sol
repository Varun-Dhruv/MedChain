// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;

contract User{
    uint public fileCount=0;
    mapping(address=>File[]) public files;  // Number of files
    struct File {
        uint256 field;
        string fileHash;
        uint256 fileSize;
        string fileType;
        string fileName;
        uint256 uploadTime;
        address payable uploader;
    }
    constructor() {}

    event FileUploaded (
        uint256 field,
        string fileHash,
        uint256 fileSize,
        string fileType,
        string fileName,
        uint256 uploadTime,
        address payable uploader
    );
    function uploadFile(string memory _fileHash, uint _fileSize, string memory _fileType, string memory _fileName) public {
        require((bytes(_fileHash).length>0)); // Make sure the file hash exists
        
        require((bytes(_fileType).length>0)); // Make sure file type exists
        
        require((bytes(_fileName).length>0));  // Make sure file fileName exists
        
        require(msg.sender!=address(0)); // Make sure uploader address exists
        
        require(_fileSize>0); // Make sure file size is more than 0
        
        fileCount++; // Increment file id
        

        files[msg.sender].push(File(fileCount,_fileHash,_fileSize,_fileType,_fileName, block.timestamp ,payable(msg.sender)));  // Add File Id to the contract

        emit FileUploaded(fileCount,_fileHash,_fileSize,_fileType,_fileName, block.timestamp ,payable(msg.sender)); // Trigger an event
  }

  function getFiles() public view returns(File memory){
     return files[msg.sender][0];
  }
}