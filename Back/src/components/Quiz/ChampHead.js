import React from 'react'
import btcoin from '../../images/kbc_icon.png'
import coin from '../../images/coin.png'
import date from '../../images/date.png'

import { NavLink } from "react-router-dom";
import dd from "../../images/diamond.png"
const ChampHead = (props) => {
  return (
    <>
    <div className="quiz_inff">
  <div className="quiz_ic_btn">
    <img src={btcoin} alt="icon" />
    <div className="quiz_nm223">
      <h2 className="q_name l_ttl">Mixed Trivia</h2>
      {
    props.status==1? <button className="btn_inf_pl disable"  style={{color:'white'}}>Played</button>: <NavLink to={`/Play/${props.id}` }><button className="btn_inf_pl">Play Now</button>  </NavLink>
      }
    </div>
  </div>
  <div className="q_inf_more">
     <div className="entry_value">
              <p>Prize</p>
              <p className="etry_am">
                <img src={dd} alt="diamond" />
                {props.prize==="0K" ?0:props.prize
                }
                {/* {props.prize} */}
              </p>
            </div>
    {/* <div>
      <p>Prize</p>
      <img src={dd}></img>

      <h2>{props.prize}</h2>
    </div> */}
    <div>
      <p>Tournament Date</p>
      <h2>
        <img src={date} alt="coin" />{props.tourdate}
      </h2>
    </div>

    <div>
      <p>Play Time</p>
      <h2>{props.playtime}</h2>
    </div>
  </div>
</div>
    </>
  )
}

export default ChampHead
