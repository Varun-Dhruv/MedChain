import React from 'react'

import { useState, useEffect } from 'react';
import { useSelector } from "react-redux"
const UserRegistration = () => {

    const doctor = useSelector(state => state.blockchain.doctor);
    const user = useSelector(state => state.blockchain.user);
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
        user.methods.setUserType(data.type).send({ from: Account }).on('transactionHash', (hash) => {
            setLoading(false)
            window.location.reload()
        }).on('error', (e) => {
            window.alert('Error')
            setLoading(false)
        })
        console.log(user);
    }

    // useEffect(() => {
    //     console.log(data)
    // }, [data])

    return (
        <div>
            <div>Hello</div>
            <input type="text" name="firstName" onChange={(event) => { handleChange(event) }} value={data.firstName} placeholder="firstname" />
            <input type="text" name="lastName" onChange={(event) => { handleChange(event) }} value={data.lastName} placeholder="lastName" />
            <input type="text" name="type" onChange={(event) => { handleChange(event) }} value={data.type} placeholder="enter user type [Doctor,Patient]" />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    )
}

export default UserRegistration;