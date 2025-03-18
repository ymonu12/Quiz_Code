import React, { useEffect,useState } from 'react'
import Navbar from '../header/Navbar'
import Tournament from '../tournament/Tournament'
import Right from '../header/Right'
import { checkAndHandleUserId} from '../AllApi/CommonUrl';
const TournamentRoute = () => {
  useEffect(() => {
    checkAndHandleUserId();
}, []);
  return ( 
   <>
  <div className="section">
  <div className="s_left">
    <Navbar></Navbar>
    <Tournament></Tournament>
    
  </div>
  <Right></Right>
</div>
   </>
  )
}

export default TournamentRoute
