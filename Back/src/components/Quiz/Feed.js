import React from 'react'
import { fetchData } from '../AllApi/QuizApi';
import {useState} from "react";
import LeaderBoard from './LeaderBoard';
import PrevWinner from './PrevWinner';
import WinningBreak from './WinningBreak';
const Feed = (props) => {
  const [Value, setValue] = useState(0);
  console.log(Value)
  return (
    <>
      <div className="tab_n mrgin_10_tb">
        <ul id="tabs-swipe-demo" className="tabs">
          <li  className={`tab col s6  ${(Value!=2 && Value!=3) ?'tab_active':''}`}>
            <a onClick={() => setValue(1) } className="active"  >
             LeaderBoard
            </a>
          </li>
          <li  className={`tab col s6  ${Value==2?'tab_active':''}`}>
            <a onClick={() => setValue(2)}>Prev. Winners</a>
          </li>
          <li  className={`tab col s6  ${Value==3?'tab_active':''}`}>
            <a onClick={() => setValue(3)}>Winning Breakup</a>
          </li>
        </ul>
      </div>
      {(Value !==2 &&Value !==3 ) &&
        <LeaderBoard leader={props.leader}></LeaderBoard>

      }
      {Value === 2 &&
        <PrevWinner prev={props.prev}></PrevWinner>
      }
      {Value === 3 &&
        <WinningBreak id={props.id} won={props.won}></WinningBreak>
      }
    </>
  )
}

export default Feed
