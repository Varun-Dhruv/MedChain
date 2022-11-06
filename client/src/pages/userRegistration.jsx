import React from 'react'

import { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
const UserRegistration = () => {

    const doctor = useSelector(state => state.blockchain.doctor);
    const user = useSelector(state => state.blockchain.user);
    const patient = useSelector(state => state.blockchain.patient);
    const account = useSelector(state => state.blockchain.account);
    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        type: "",
        dob: "",
    });


    const handleChange = async (event) => {
        const { name, value } = event.target;
        setData((data) => {
            return { ...data, [name]: value };
        });
        console.log(data)
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

    // useEffect(() => {
    //     console.log(data)
    // }, [data])

    return (
        <div>
            <div>Hello</div>
            <input type="text" name="firstName" onChange={(event) => { handleChange(event) }} value={data.firstName} placeholder="firstname" />
            <input type="text" name="lastName" onChange={(event) => { handleChange(event) }} value={data.lastName} placeholder="lastName" />
            <input type="date" name="date" onChange={(event) => { handleChange(event) }} value={data.lastName} placeholder="lastName" />
            <input type="text" name="type" onChange={(event) => { handleChange(event) }} value={data.type} placeholder="enter user type [Doctor,Patient]" />
            <button onClick={handleSubmit}>Submit</button>
            <button onClick={handleDataSubmit}>Submit Name</button>
            <button onClick={getUserType}>getUser</button>
        </div>
    )
    // return (
    //     <div>
    //         hello
    //     </div>
    // )
}

export default UserRegistration;