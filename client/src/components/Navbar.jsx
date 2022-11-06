import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
    return (
        <div>
            <Link className='link' to='/'>Home</Link>
            <Link className='link' to='/upload'>Upload</Link>
            <Link className='link' to='/share'>Share</Link>
            <Link className='link' to='/view'>view</Link>
            <Link className='link' to='/UserReg'>UserReg</Link>
        </div>
    )
}
export default Navbar