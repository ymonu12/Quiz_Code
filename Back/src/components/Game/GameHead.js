import React from 'react'
import { useNavigate } from "react-router-dom";
const GameHead = (props) => {
    const navigate = useNavigate()
    const res=()=>{
          navigate(`/GameDetails/${props.id}/${props.index}`);
        }
      
  return (
    <>
    <div class="game_list">
                <div class="game">
                    <div class="game_img">
                        <img src={props.image_url} alt="kbc"/>
                      
                        <div class="played bottom-right">
                            <p>user Played: {props.total_user_playeds}</p>    
                        </div>
                    </div>
                    <div class="game_info">
                        <p>{props.contest_name}</p>
                        <div class="d_flex">
                            <p>{props.sub_topic_name}</p>
                            <p>{props.contest_played_date}</p>
                        </div>
                        <div class="entr entr2">
                            <div class="entry_value">
                                <p>{props.contest_cost_text}</p>
                                <p class="etry_am"><img src={props.entry_icon} alt="diamond"/>{props.contest_cost}</p>
                            </div>
                            <div class="entry_value">
                                <p>Max. Prize Pool</p>
                                <p class="etry_am"><img src={props.prize_icon}alt="diamond"/>{props.max_prize_pool}</p>
                            </div>
                        </div>

                        <button class="btn_white btn_gren" onClick={res}>{props.joinbuttontxt}</button>
                    </div>
                </div>
            </div>
    </>
  )
}

export default GameHead
