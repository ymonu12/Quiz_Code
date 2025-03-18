import React from 'react'
import GameHead from '../Game/GameHead'
import Navbar from '../header/Navbar'
import Right from '../header/Right'
import { BASE_URL,user_id,tok} from '../AllApi/CommonUrl';
import { walletData } from '../AllApi/WalletApi';
import { gameData } from '../AllApi/GameApi';
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
const GameRoute = () => {
  let { id } = 214;
  const [arr, setArr] = useState([]);
  const[avlcoins,setAvlcoins]=useState([]);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    ; (async () => {
      try {
        const WalletEndPoint='userheaderdetail/homecategory'
        const result = await walletData(user_id,BASE_URL,WalletEndPoint,tok); // Replace with your endpoint
        setAvlcoins(result.data.wallet.coin_balance)
        const gameEnd='goldgame/gameContestList'
        const game = await gameData(id,user_id,BASE_URL,gameEnd,tok);
        setArr(game.result.game_details)
        setIsLoading(false);
            } catch (error) {
        console.log(error)
      }
    })()
  }, []);
  
  return (
         <div className="section">
         <div className="s_left">
          <Navbar></Navbar>
          {isLoading && <div className='center ldr_center'>
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
            </div>}

          {
        arr.map((data, index) => { 
          return(
          <GameHead  contest_cost={data.contest_cost} joinbuttontxt={data.joinbuttontxt} contest_played_date={data.contest_played_date} total_user_playeds={data.total_user_playeds} sub_topic_name={data.sub_topic_name} entry_icon={data.entry_icon} prize_icon={data.prize_icon} entry_text={data.entry_text} max_prize_pool={data.max_prize_pool} contest_cost_text={data.contest_cost_text} contest_name={data.contest_name} image_url={data.image_url} avlcoins={avlcoins}index={index} id={214}></GameHead>
        )

        })

      }
    </div>
    <Right></Right>
    </div>
  )
}

export default GameRoute
