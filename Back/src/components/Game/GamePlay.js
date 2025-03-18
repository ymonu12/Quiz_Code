import React from 'react'
import { gamescore } from '../AllApi/GameScore';
import {useEffect } from 'react';
import {useParams } from 'react-router-dom'
import Right from '../header/Right';
import { BASE_URL,tok} from '../AllApi/CommonUrl';
import { useNavigate } from "react-router-dom";
import l1 from'../../images/level1.png'
import l2 from'../../images/level2.png'
import l3 from'../../images/level3.png'
import l4 from'../../images/level4.png'
import l5 from'../../images/level5.png'
const GamePlay = () => {
  let {user_id,contest_id,level_id,score} = useParams();
  const navigate = useNavigate()
  const res=()=>{
         navigate(`/GameLevel/${contest_id}`);
  }
  useEffect(() => {
    ; (async () => {
      try {
        const EndPoint='/goldgame/savelevelPoints'
        const result= await gamescore(user_id,contest_id,level_id,score,BASE_URL,EndPoint,tok);
        console.log(result)
            } catch (error) {
        console.log(error) 
      }
    })()
  }, []);
  return (
   <>
   <div className="section">
  <div className="s_left">
 <div className="level_complete">
  {level_id==1&&
  <img src={l1} alt="level1" />
  }
    {level_id==2&&
  <img src={l2} alt="level1" />
  }
    {level_id==3&&
  <img src={l3} alt="level1" />
  }
    {level_id==4&&
  <img src={l4} alt="level1" />
  }
    {level_id==5&&
  <img src={l5} alt="level1" />
  }
  <h2>Completed</h2>
  <p>Play Continue to click on next button</p>
  <p className="margin10">Level Score:{score}</p>
  <button className="btn_white btn_gren" onClick={res}>Next</button>
</div>
</div>
<Right></Right>
</div>
   </>
  )
}

export default GamePlay
