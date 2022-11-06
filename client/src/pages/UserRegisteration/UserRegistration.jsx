import React from 'react'
import './userRegistration.scss';
import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import signup_img from '/public/assets/images/signup_img.jpg';
const UserRegistration = () => {

    const doctor = useSelector(state => state.blockchain.doctor);
    const user = useSelector(state => state.blockchain.user);
    const patient = useSelector(state => state.blockchain.patient);
    const account = useSelector(state => state.blockchain.account);
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        type: "",
    });


    const handleChange = async (event) => {
        const { name, value } = event.target;
        setData((data) => {
            return { ...data, [name]: value };
        });
    };
    const handleSubmit = async () => {
        // user.setUserType(data.type).send({ from: account }).on('transactionHash', (hash) => {
        //     //setLoading(false)
        //     // window.location.reload()
        //     console.log("Sent user data");
        // }).on('error', (error) => {
        //     window.alert('Error')
        //     //setLoading(false)
        // })
        const userType = await getUserType();
        if (userType === "Doctor") {
            doctor.registerDoc(data.firstName, data.lastName).send({ from: account }).on('transactionHash', (hash) => {
                console.log("Sent user details to doctor contract");
            }).on('error', (error) => {
                window.alert("error");
            })
        }
        else if (userType === "Patient") {
            patient.registerPatient(data.firstName, data.lastName).send({ from: account }).on('transactionHash', (hash) => {
                console.log("Sent user details to doctor contract");
            }).on('error', (error) => {
                console.error(error)
                window.alert("error");
            })
        }
        console.log(user);
    }
    const handleDataSubmit = async () => {
        let userData
        const userType = await user.getUserType().call();
        if (userType === "Doctor") {
            userData = await doctor.docList(account).call({ from: account });
        }
        else if (userType === "Patient") {
            userData = await patient.patientList(account).call({ from: account });
        }
        console.log(userData);
    }
    const getUserType = async () => {

        const userType = await user.getUserType().call();
        console.log(userType)
        return userType;
    }

    return (
        <div className='User_registration container padding_top_nav'>

            <div className="register_wrapper">
                <div className="user_left">
                    <img src={signup_img} alt="" />
                </div>
                <div className="user_register_container">
                    <h1>Register to continue to Medchain</h1>
                    <div className='label'>First Name</div>
                    <input type="text" name="firstName" onChange={handleChange} value={data.firstName} placeholder="firstname" />
                    <div className='label'>Last Name</div>
                    <input type="text" name="lastName" onChange={handleChange} value={data.lastName} placeholder="lastName" />
                    <div className='label'>Select Your Role</div>
                    <select name="type" onChange={handleChange} value={data.type}>
                        <option value="Patient">Patient</option>
                        <option value="Doctor">Doctor</option>
                    </select>
                    <button className='submit' onClick={handleSubmit}>Submit</button>
                </div>
            </div>


        </div>
    )
    // return (
    //     <div>
    //         hello
    //     </div>
    // )
}

export default UserRegistration;