import React from 'react'
import back from '../../images/back.svg'
import { NavLink } from "react-router-dom";
const CateHeader = (props) => {
  return (
   <>
   <div className="header">
  <nav className="nav2">
    <NavLink to='/' className="sidenav-trigger nav_inf">
      <img src={back} alt="back" className="back_ic" />
    </NavLink>
    <a href="#" className="nav_inf">
      <h2 className="nav_text">{props.name}</h2>
    </a>
  </nav>
</div> 
   </>
  )
}

export default CateHeader
