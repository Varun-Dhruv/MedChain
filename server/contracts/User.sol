// SPDX-License-Identifier: GPL-3.0
pragma solidity ^0.8.4;

contract User {
    uint public fileCount = 0; // Number of files
    mapping(address => File[]) public files; // mapping of user against files
    mapping(address => File[]) public sharedFiles; //mapping of user address to list of shared files
    mapping(address => string) public userType; // mapping of address to user type
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

    event FileUploaded(
        uint256 field,
        string fileHash,
        uint256 fileSize,
        string fileType,
        string fileName,
        uint256 uploadTime,
        address payable uploader
    );
    event FileShared(address sender, address receiver, File file);

    function uploadFile(
        string memory _fileHash,
        uint _fileSize,
        string memory _fileType,
        string memory _fileName
    ) public {
        require((bytes(_fileHash).length > 0)); // Make sure the file hash exists

        require((bytes(_fileType).length > 0)); // Make sure file type exists

        require((bytes(_fileName).length > 0)); // Make sure file fileName exists

        require(msg.sender != address(0)); // Make sure uploader address exists

        require(_fileSize > 0); // Make sure file size is more than 0

        fileCount++; // Increment file id

        files[msg.sender].push(
            File(
                fileCount,
                _fileHash,
                _fileSize,
                _fileType,
                _fileName,
                block.timestamp,
                payable(msg.sender)
            )
        ); // Add File Id to the contract

        emit FileUploaded(
            fileCount,
            _fileHash,
            _fileSize,
            _fileType,
            _fileName,
            block.timestamp,
            payable(msg.sender)
        ); // Trigger an event
    }

    function getFilesCount() public view returns (uint) {
        return files[msg.sender].length;
    }

    function getFiles(uint _fileId) public view returns (File memory) {
        return files[msg.sender][_fileId];
    }

    function setUserType(string memory _userType) public {
        require(bytes(userType[msg.sender]).length == 0);

        userType[msg.sender] = _userType;
    }

    function getUserType() public view returns (string memory) {
        return userType[msg.sender];
    }

    function getSharedFilesCount() public view returns (uint8) {
        return uint8(sharedFiles[msg.sender].length);
    }

    function getSharedFiles() public view returns (File[] memory) {
        return sharedFiles[msg.sender];
    }

    function shareFile(File memory _file, address payable _receiver) public {
        sharedFiles[_receiver].push(_file);
        emit FileShared(msg.sender, _receiver, _file);
    }
}
