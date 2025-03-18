import React from 'react'
import logo from '../../images/logo.png'
import wallet from '../../images/wallet_ic_h.svg'
import  { useState } from 'react'
import { NavLink } from 'react-router-dom'
const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
   <>
   <div className="header">
  <nav>
    <div className="h_left">
      {/* <a  className="sidenav-trigger" data-target="slide-out"  >
        <img src={img} alt="menu" className="hamburger"  onClick={() => setToggle(!toggle)} />
      </a> */}
      <NavLink to={"/"}>
        <img src={logo} alt="menu" className="logo" />
      </NavLink>
    </div>
    <div className="h_right">
      {/* <NavLink >
        <img src={diamond} alt="wallet" />
      </NavLink>
      <NavLink>
        <img src={ept} alt="wallet" />
      </NavLink> */}
      <NavLink to={"/Progress"} >
        <img src={wallet} alt="wallet" />
      </NavLink>
    </div>
  </nav>
  {toggle && (

  <ul  className="sidenav" id='slide-out' >
    <div className="inner_page" >
      <a href="#">About us</a>
      <a href="#">Contact us</a>
      <a href="#">Privacy Policy</a>
      <a href="#">Terms &amp; Conditions</a>
    </div>
  </ul>
   )}
</div>  
   </>
  )
}
export default Navbar
