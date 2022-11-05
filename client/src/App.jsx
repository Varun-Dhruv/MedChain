import { useState } from 'react'
import { Routes, Route } from "react-router";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Share from './pages/Share';
import Upload from './pages/Upload';
import View from './pages/View';
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/upload" element={<Upload />} />
        <Route path="/share" element={<Share />} />
        <Route path="/view" element={<View />} />
      </Routes>
    </div>
  )
}

export default App
