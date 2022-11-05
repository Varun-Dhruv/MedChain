import React from 'react'
import loadWeb3 from '../utils/loadWeb3'
import loadBlockChainData from '../utils/loadBlockChainData'
const Home = () => {
    return (
        <div className='Home'>
            <button onClick={() => {
                loadWeb3();
                loadBlockChainData();
            }}>Connect to Wallet</button>
        </div>
    )
}
export default Home;
