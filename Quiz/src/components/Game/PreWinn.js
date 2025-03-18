import React from 'react'
import prof from '../../images/play_solo.png'

const PreWinn = (props) => {
  console.log(props.prev)
  return (
    <>
      {/* <div class="no_task text">
                  You haven't completed any task yet.
              </div> */}
      <div id="test-swipe-2" className="col s12">
      {
  props.pre_winners.map((key,index) => {
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

    </>
  )
}

export default PreWinn
