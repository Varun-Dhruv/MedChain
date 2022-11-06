import { useState } from 'react'
import { Routes, Route } from "react-router";
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import Share from './pages/Share/Share';
import Upload from './pages/Upload/Upload';
import View from './pages/View/View';
import UserRegistration from './pages/UserRegisteration/UserRegistration';
import { useSelector, useDispatch } from "react-redux"
import * as actions from "./store/actions/index"
import { useEffect } from 'react';
import loadWeb3 from './utils/loadWeb3';
import loadBlockChainData from './utils/loadBlockChainData';

function App() {
  const [count, setCount] = useState(0)
  // const doctor = useSelector(state => state.blockchain.doctor);
  // const patient = useSelector(state => state.blockchain.patient);
  // const user = useSelector(state => state.blockchain.user);
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
  useEffect(() => {
    connectToWallet();
  }, [])

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/share" element={<Share />} />
        <Route path="/view" element={<View />} />
        <Route path="/UserReg" element={<UserRegistration />} />
      </Routes>
    </div>
  )
}

export default App
