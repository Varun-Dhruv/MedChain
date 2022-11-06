import React from 'react'
import { useSelector } from 'react-redux';
import { getFiles } from '../utils/getFiles';
const View = () => {
    const doctor = useSelector(state => state.blockchain.doctor);
    const user = useSelector(state => state.blockchain.user);
    const patient = useSelector(state => state.blockchain.patient);
    const account = useSelector(state => state.blockchain.account);
    const handleClick = async () => {
        const userType = await user.getUserType().call();
        if (userType === "Patient") {
            getFiles(patient, account)
        }
        else if (userType === "Doctor") {
            getFiles(doctor, account)
        }
    }
    return (
        <div>
            <button onClick={handleClick}>Click me</button>
        </div>
    )
}
export default View;
