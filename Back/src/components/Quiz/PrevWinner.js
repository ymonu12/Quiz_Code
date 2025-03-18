import React from 'react'
const PrevWinner = (props) => {
  const winn=props.prev
  console.log(props.prev)
  return (
    <>
      {/* <div class="no_task text">
                  You haven't completed any task yet.
              </div> */}
      <div id="test-swipe-2" className="col s12">
      <p className="text_detl">Winner  will be updated every 24hrs.</p>
      {winn!=null && 
        winn.map((key,index) => {
          return(
<div className="leaderboard_section">      
        <div className="ldr_list">
          <div className="ldr_itm">
            <div className="ldr_sb_itm">
              <img src="./images/kbc_icon.png" alt="kbc_icon" />
              <p>Username</p>
            </div>
            <div className="ldr_sb_itm">
              <h2>#1</h2>
            </div>
          </div>
          <div className="ldr_itm">
            <p>
              <span>Daimonds:</span> 553
            </p>
          </div>
        </div>
        </div>
          )})

      }
      
      </div>

    </>
  )
}

export default PrevWinner
