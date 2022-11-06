import React from 'react'
import { uploadFile } from '../utils/uploadFile'
import { useSelector } from "react-redux"
const Upload = () => {
    const doctor = useSelector(state => state.blockchain.doctor);
    const user = useSelector(state => state.blockchain.user);
    const patient = useSelector(state => state.blockchain.patient);
    const account = useSelector(state => state.blockchain.account);
    const handleChange = async (event) => {
        const userType = await user.getUserType().call();
        if (userType === "Patient") {
            uploadFile(event.target.files[0], patient, account)
        }
        else if (userType === "Doctor") {
            uploadFile(event.target.files[0], doctor, account)
        }
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
