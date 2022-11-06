import React from 'react'
import loadWeb3 from '../../utils/loadWeb3'
import loadBlockChainData from '../../utils/loadBlockChainData'
import { useDispatch } from "react-redux";
import * as actions from '../../store/actions/index';
import HeroSection from '../../components/HeroSection/HeroSection';

const Home = () => {
    const dispatch = useDispatch();
    const connectToWallet = async () => {
        await loadWeb3()
        const { doctor, patient, user, account } = await loadBlockChainData(dispatch);
        if (doctor && patient && user) {
            dispatch(actions.setDoctor(doctor.methods))
            dispatch(actions.setPatient(patient.methods))
            dispatch(actions.setUser(user.methods))
            dispatch(actions.setAccount(account));
        }
    }
    return (
        <div className='Home'>
            {/* <button onClick={connectToWallet}>Connect to Wallet</button> */}
            <HeroSection />
        </div>
    )
}
export default Home;
