import React from 'react'
import Right from '../header/Right'
import { gamelevel } from '../AllApi/GameLeveApi';
import { useState,useEffect } from 'react';
import { Link, useParams } from 'react-router-dom'
import { useNavigate } from "react-router-dom";
import { BASE_URL,user_id,tok} from '../AllApi/CommonUrl';
import Navbar from '../header/Navbar';
const GameLevel = () => {
    let {constid} = useParams();
    const [level, setLevel] = useState([]);
    const [res, setRes] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        ; (async () => {
          try {
            const LevelEndPoint='goldgame/gameLevels'
            const result= await gamelevel(constid,user_id,BASE_URL,LevelEndPoint,tok);
            setRes(result)
            setLevel(result.alllavels)
            setIsLoading(false);
                } catch (error) {
            console.log(error) 
          }
        })()
      }, []);
      console.log(level)

    //   function onHandleClick(callback) {
    //     callback();
    // }
    function api(levelId) {
        // var link =`http://testing2.mchamplite.com/knifefling/?userId=${9}&contestId=${3}&levelNameId=${5}&newurl=http://localhost:3000/GamePlay`
        var link =`${res.game_url}?userId=${user_id}&contestId=${constid}&levelNameId=${levelId}&newurl=http://localhost:3000/GamePlay`   
        window.location.href = link;  
    }
    //   const onHandleClick = () => {   
    //     navigate("/GamePlay"); 
    //  } 
    return (
        <>

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
  </div>
                    }
                        <div
                            className="trnmnt_header"
                            style={{ backgroundImage: `url(${res.image_banner} )` }}
                        />
                        
                        <div className="game_det">
                            <div className="flexx">
                                <p className="l_ttl">Select Level</p>
                                <button className="htp">How To Play</button>
                            </div>
                            <div className="game_list">
                                {
                              level.map((key,index) => {
                                    return(
                                <div className="game">
                                    <div className="game_img level_img">
                                        <img src={key.lavel_icon} alt="level1" />
                                    </div>
                                    <div className="game_info">
                                        <p>Level {key.lavel_name}</p>
                                        <p>Score: {key.score}</p>
                                        {/* <a  href={`${res.game_url}/${1}`}> */}
                                        {
                                            key.alpha==1 &&
                                            <button className={`btn_white btn_gren disable`}>{key.levelbuttontext}</button>

                                        }
                                        { key.alpha==0 &&
                                    <button className={`btn_white btn_gren`} onClick={() => api(key.lavel_name)} >{key.levelbuttontext}</button>
                                        }
                                     
                                        {/* </a> */}
                                    </div>
                                </div>
                                 )
                                })
                            }
                            </div>
                        </div>
                        </div>
                    <Right></Right>
            </div>
        </>
    )
}

export default GameLevel
