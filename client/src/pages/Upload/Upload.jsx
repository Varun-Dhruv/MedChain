import React, { useRef, useState } from 'react'
import { uploadFile } from '../../utils/uploadFile'
import { FileDrop } from "react-file-drop";
import FolderImg from "/public/assets/images/folderImg.png";
import { AiOutlineFile } from "react-icons/ai";
import './Upload.scss';

const Upload = () => {
    const [files, setFiles] = useState([]);
    const uploadRef = useRef(null);

    const handleBrowseClick = () => {
        uploadRef.current.click();
    };

    const handleFiles = (e, files) => {
        e.preventDefault();
        for (let i = 0; i < files.length; i++) {
            setFiles((prevFiles) => [...prevFiles, files[i]]);
        }
        console.log(files);
    };

    const handleChange = (e) => {
        e.preventDefault();
        handleFiles(e, e.target.files);
    };

    const handleSubmit = () => {
        for (let k = 0; k < files.length; k++) {
            props.upload(files[k]);
        }
    };


    return (
        <div className='Upload'>
            <input ref={uploadRef} multiple hidden={true} onChange={handleChange} type="file" />

            <div className="upload_wrapper container">
                <div className="upload-left-section">
                    <div className="drag-area">
                        <FileDrop
                            onFrameDragEnter={(event) =>
                                console.log("onFrameDragEnter", event)
                            }
                            onFrameDragLeave={(event) =>
                                console.log("onFrameDragLeave", event)
                            }
                            onFrameDrop={(event) => console.log("onFrameDrop", event)}
                            onDragOver={(event) => console.log("onDragOver", event)}
                            onDragLeave={(event) => console.log("onDragLeave", event)}
                            onDrop={(files, event) => handleFiles(event, files)}
                        >
                            <img src={FolderImg} alt="" />
                            <h3>
                                Drag your electronic health records here to start uploading
                            </h3>
                            <span>OR</span>
                            <div onClick={handleBrowseClick} className="upload-btn">
                                Browse File
                            </div>
                        </FileDrop>
                    </div>

                </div>
                <div className="upload-right-section">
                    <div className="file-view-section">
                        <div className="file-container">
                            {

                                files.length > 0 ?
                                    files.map((file, index) => {
                                        return (
                                            <div key={index} className="file">
                                                <AiOutlineFile />
                                                <h6>{file.name}</h6>
                                            </div>
                                        );
                                    })
                                    : (<div className='no_files'>
                                        <h3>No files selected</h3>
                                        <div className="helper">
                                            Try adding files using the upload box provided on the left side
                                        </div>
                                    </div>)
                            }
                        </div>
                    </div>

                    <button onClick={handleSubmit} type="submit">Submit</button>
                </div>
            </div>
        </div>
    )
}
export default Upload;
