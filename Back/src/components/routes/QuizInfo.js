import React from 'react'
import CateHeader from '../header/CateHeader'
import ChampHead from '../Quiz/ChampHead'
import Right from '../header/Right'
import Feed from '../Quiz/Feed'
import { BASE_URL,user_id,tok} from '../AllApi/CommonUrl';
import { fetchData } from '../AllApi/QuizApi';
import {useState,useEffect} from "react";
import { useParams } from 'react-router-dom'
const QuizInfo = () => {
  let { id } = useParams();
  const [leader, setLeader] = useState([]);
  const [data, setData] = useState([]);
  const [prev, setPrev] = useState([]);
  const [won, setWon] = useState([]);
  const [tourdate, setTourdate] = useState('');
  const[prize,setPrize]=useState('');
  const[playtime,setPlaytime]=useState('');
  const[status,setStatus]=useState('');
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    // alert("run api");
      ; (async () => {
        try {
          const fetcEndPoint='earndiamond/playsolo'
          const result = await fetchData(id,user_id,BASE_URL,fetcEndPoint,tok); // Replace with your endpoint
          setLeader(result.winner);
          setData(result)
          setPrev(result.last_month_winner)
          setWon(result.winning_breakup)
          setTourdate(result.contest_details.tourdate)
          setPrize(result.contest_details.prize_money_amount)
          setPlaytime(result.contest_details.total_contest_play_time)
          setStatus(result.contest_details.playedstatus)
          setIsLoading(false);
              } catch (error) {
          console.log(error)
        }
      })()
    }, []);
    console.log(data)
  return (
    <>
      <div className="section">
        <div className="s_left">
          <CateHeader name={'Quiz Info'}></CateHeader>
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
          <ChampHead tourdate={tourdate} prize={prize} playtime={playtime} id={id} status={status}></ChampHead>
          <div className="body_sec">
            <p className="text_detl">
              Play contest daily to earn more points &amp; increase your chance to win.
            </p>
            <Feed  won={won} leader={leader} prev={prev}></Feed>
          </div>
        </div>
        <Right></Right>
      </div>

    </>
  )
}

export default QuizInfo
