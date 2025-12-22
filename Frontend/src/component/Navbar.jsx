import React from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <div>
        <nav>
            <ul className='Navbar'>
               <li><Link className='Link' to="/">Home</Link></li>
               <li><Link classNmae='Link' to="/about">About</Link></li>
               <li><Link className='link' to="/contact">Contact</Link></li>
               <li><Link className='link' to="/service">Service</Link></li>
               <li><Link className='Link' to="/UseState">UseState</Link></li>
               <li><Link className='Link' to="/UseEffect">UseEffect</Link></li>



            </ul>
        </nav>
    </div>
  )
}

export default Navbar