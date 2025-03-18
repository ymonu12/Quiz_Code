import React from 'react'
const WinningBreak = (props) => {
 let won =props.won
  return (
    <>
      <div id="test-swipe-3" className="col s12">
        <div className="ldr_list">
          <div className="ldr_itm">
            <div className="ldr_sb_itm">
              <p>Rank</p>
            </div>
            <div className="ldr_sb_itm">
              <p>Daimonds</p>
            </div>
          </div>
        </div>
{
  won.map((key,index) => {
    return(
      <div className="ldr_list" key={index}>
      <div className="ldr_itm">
        <div className="ldr_sb_itm">
        <p>#{key.rank}</p>
        </div>
        <div className="ldr_sb_itm">
        <p>{key.winning}</p>
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

export default WinningBreak
