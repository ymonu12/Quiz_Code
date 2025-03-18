import React from 'react'
const LeaderBoard = (props) => {
const lead=props.leader 
  return (
   <>
  {/* leaderboard*/}
  <div id="test-swipe-1" className="col s12 ">
  <p className="text_detl">Leaderboard will be updated every 24hrs.</p>
 {
 lead!=null &&
  lead.map((key,index) => {
    return(
  <div className="leaderboard_section">      
  <div className="ldr_list">
    <div className="ldr_itm">
      <div className="ldr_sb_itm">
        <img src="" alt="kbc_icon" />
        <p>{key.name}</p>
      </div>
      <div className="ldr_sb_itm">
        <h2>#{key.rank}</h2>
      </div>
    </div>
    <div className="ldr_itm">
      <p>
        <span>Total Points:</span> {key.diamond}
      </p>
    </div>
  </div>
</div>
  )
})
 }
 
  </div>
   </>
  )
}

export default LeaderBoard
