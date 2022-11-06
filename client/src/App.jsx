import { useState } from 'react'
import { Routes, Route } from "react-router";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Share from './pages/Share';
import Upload from './pages/Upload';
import View from './pages/View';
import UserRegistration from './pages/userRegistration';
import { useSelector } from "react-redux"
import { useEffect } from 'react';
function App() {
  const [count, setCount] = useState(0)
  const doctor = useSelector(state => state.blockchain.doctor);
  const patient = useSelector(state => state.blockchain.patient);
  const user = useSelector(state => state.blockchain.user);
  useEffect(() => {
    console.log(doctor);
    console.log(patient);
    console.log(user);
  }, [user, patient, doctor])

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
