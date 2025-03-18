import React from 'react'
import timer from '../../images/timer.png'
import user from '../../images/user.png'
import dd from '../../images/diamond.png'
import { useState,useEffect } from 'react';
import Right from '../header/Right'
import { useParams } from 'react-router-dom'
import { gameData } from '../AllApi/GameApi';
import { Details } from '../AllApi/GameDetailsApi';
import WonBreak from './WonBreak';
import PreWinn from './PreWinn';
import LeadBoard from './LeadBoard';
import { walletData } from '../AllApi/WalletApi';
import { useNavigate } from "react-router-dom";
import { CoinData } from '../AllApi/CoinDeductionApi';
import { BASE_URL,user_id,tok} from '../AllApi/CommonUrl';
import Navbar from '../header/Navbar';
const GameDetails = () => {
    const [Value, setValue] = useState(0);
    const [arr, setArr] = useState([]);
    const [winn, setWinn] = useState([]);
    const [pre_winners, setPre_winners] = useState([]);
    const [lead, setLead] = useState([]);
    const[avlcoins,setAvlcoins]=useState([]);
    const [isLoading, setIsLoading] = useState(true);
    let { id ,indx} = useParams();
    const entry_fees=arr.contest_cost
    console.log('Entry Fees',entry_fees);
    console.log('Balance',avlcoins)
    const navigate = useNavigate()
    const constid=arr.contest_id
    const res=async()=>{
        if(parseInt(avlcoins)>=parseInt(entry_fees) ){
          try {
            const endpoint='userheaderdetail/coinDeduct';
            const result= await CoinData(user_id,entry_fees,arr.contest_name,BASE_URL,endpoint,tok);
             console.log('data',result);
             navigate(`/GameLevel/${constid}`);
          }
          catch{}
             
        }
        else{
         alert(" You Don't Have Enough Coin ")
        }
      }
    useEffect(() => {
        ; (async () => {
          try {
            const gameEnd='goldgame/gameContestList'
            const game = await gameData(id,user_id,BASE_URL,gameEnd,tok);
            setArr(game.result.game_details[indx])
            const contest_id=game.result.game_details[indx].contest_id
            const gameendpoint='goldgame/gameDetail';
            const gamedetail= await Details(contest_id,user_id,BASE_URL,gameendpoint,tok);
            setWinn(gamedetail.winbreakup)
            setPre_winners(gamedetail.pre_winners)
            setLead(gamedetail.winners)
            const WalletEndPoint='userheaderdetail/homecategory'
            const result = await walletData(user_id,BASE_URL,WalletEndPoint,tok); // Replace with your endpoint
            setAvlcoins(result.data.wallet.coin_balance)
            setIsLoading(false);
                } catch (error) {
            console.log(error) 
          }
        })()
      }, []);
      console.log(winn)
    return (
        <>
            <div className="section">
                <div className="s_left">
                    <Navbar></Navbar>
                    {isLoading &&<div className='center ldr_center'>
    <div className="preloader-wrapper big active">
      <div className="spinner-layer spinner-blue">
        <div className="circle-clipper left">
          <div className="circle"></div>
        </div><div className="gap-patch">
          <div className="className"></div>
        </div><div className="circle-clipper right">
          <div className="circle"></div>
        </div>
      </div>
    </div>
  </div>

                    }
                    <div class="trnmnt_header" style={{ backgroundImage: `url(${arr.image_url} )` }}></div>
                    <div class="game_det">
                        <div class="flexx">
                     
                            <p class="l_ttl">{arr.contest_name}</p>
                            <button class="htp">How To Play</button>
                        </div>
                        <div class="flexx flexx2">
                            <div>
                                <img src={timer} alt="timer" />
                                <p class="text_bg redd">{arr.time_end}</p>
                                <p>End</p>
                            </div>
                            <div>
                                <img src={dd} alt="timer" />
                                <p class="text_bg bluee">{arr.prize_pool}</p>
                                <p>Prize Pool</p>
                            </div>
                            <div>
                                <img src={user} alt="timer" />
                                <p class="text_bg bluee">{arr.totalParticipant}</p>
                                <p>User Playing</p>
                            </div>
                        </div>
                        <div class="tab_n mrgin_10_tb">
                            <ul id="tabs-swipe-demo" className="tabs">
                                <li className={`tab col s6  ${(Value != 2 && Value != 3) ? 'tab_active' : ''}`}>
                                    <a onClick={() => setValue(1)} className="active"  >
                                        LeaderBoard
                                    </a>
                                </li>
                                <li className={`tab col s6  ${Value == 2 ? 'tab_active' : ''}`}>
                                    <a onClick={() => setValue(2)}>Prev. Winners</a>
                                </li>
                                <li className={`tab col s6  ${Value == 3 ? 'tab_active' : ''}`}>
                                    <a onClick={() => setValue(3)}>Winning Breakup</a>
                                </li>
                            </ul>
                        </div>
                        {(Value !== 2 && Value !== 3) &&
                            <LeadBoard lead={lead}></LeadBoard>

                        }
                        {Value === 2 &&
                            <PreWinn pre_winners={pre_winners}></PreWinn>
                        }
                        {Value === 3 &&
                            <WonBreak won={winn}></WonBreak>
      }
      {!isLoading&&
        <div className="btm_fix">
  <button className="btn_white btn_gren modal-trigger"  onClick={res}>
    Play Now
  </button>
</div>
      }
        </div>
                </div>
                <Right></Right>
            </div>
        </>
    )
}

export default GameDetails
