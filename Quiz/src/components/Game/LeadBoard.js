import React from 'react'
import prof from '../../images/play_solo.png'
const LeadBoard = (props) => {
const  lead=props.lead;
console.log('leader',lead)
  return (
   <>
  {/* leaderboard*/}
  <div id="test-swipe-1" className="col s12 ">
  <p className="text_detl">Leaderboard will be updated every 24hrs.</p>
  <div className="leaderboard_section">   
  {
  lead.map((key,index) => {
    return(
      <div className="ldr_list">
      <div className="ldr_itm">
        <div className="ldr_sb_itm">
          <img src={prof} alt="kbc_icon" />
          <p>{key.name}</p>
        </div>
        <div className="ldr_sb_itm">
          <h2>#{key.rank}</h2>
        </div>
      </div>
      <div className="ldr_itm">
        <p>
          <span>Won:</span> {key.total_prize_won}.0
        </p>
      </div>
    </div>
    )
  })
}  
  </div>
  </div>
   </>
  )
}

export default LeadBoard
