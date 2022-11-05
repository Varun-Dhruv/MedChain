import React from 'react'
import { uploadFile } from '../utils/uploadFile'

const Upload = () => {
    const handleChange = (event) => {
        uploadFile(event.target.files[0])
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        for (let k = 0; k < files.length; k++) {
            props.upload(files[k]);
        }
    };
    return (
        <div>
            Upload
            <input onChange={handleChange} type="file" />
        </div>
    )
}
export default Upload;
