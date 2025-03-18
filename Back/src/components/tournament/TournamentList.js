import React from 'react'
import { CoinData } from '../AllApi/CoinDeductionApi';
import { useNavigate } from "react-router-dom";
import { BASE_URL,user_id,tok} from '../AllApi/CommonUrl';
import Cookies from 'js-cookie';
const TournamentList = (props) => { 
  const coinValue=props.avlcoins
  const navigate = useNavigate()
  const res=async()=>{
    // sessionStorage.setItem('quizIndex', JSON.stringify(0));
    Cookies.set('quizIndex', JSON.stringify(0));
    if(parseInt(props.option_type)==parseInt(4) && parseInt(coinValue)>=parseInt(props.coin) ){
      try {
        const endpoint='userheaderdetail/coinDeduct'
        const result= await CoinData(user_id,props.coin,props.title,BASE_URL,endpoint,tok);
         console.log('data',result);
      navigate(`/QuizInfo/${props.category_id}`);
      }
      catch{}
    }
    else{
      alert("You Don't Have Enough Coin")
    }
    // else if(props.coin=='Free'){
    //    navigate(`/QuizInfo/${props.category_id}`);
    // }
    // else if(props.option_type==5){
    //   navigate(`/Game/${props.category_id}`);
    // }
  }
  // console.log(coinValue)
  return (

   <>
   {props.option_type==4 &&
    <div className="trnm_list" style={{ backgroundImage: `url(${props.bg_image})` }}>
          <h2 className="tour_ttl">{props.title}</h2>
          <div className="entr">
            <div className="entry_value">
              <p>{props.entry_text}</p>
              <p className="etry_am">
                <img src={props.coin_image} alt="coin" />
               {props.coin}
              </p>
            </div>
            <div className="entry_value">
              <p>{props.win_upto}</p>
              <p className="etry_am">
                <img src={props.diamond_image} alt="diamond" />
                {props.diamond}
              </p>
            </div>
          </div>
            <button className="btn_white" onClick={res}>{props.button_text}</button>
        </div>
   }
        
   </>
  )
}

export default TournamentList
