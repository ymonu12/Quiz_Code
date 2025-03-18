import React, { useEffect } from 'react'
import clock from '../../images/clock_1.png'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { fetchData } from '../AllApi/QuizApi';
import { BASE_URL,user_id,tok} from '../AllApi/CommonUrl';
import Cookies from 'js-cookie';
const QuestionsScreen = () => {
  let { id } = useParams();
  const local=0
  // const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);

  // store current index after page reload 
  // const [currentQuestionIndex, setCurrentQuestionIndex] = useState(() => {
  //   const savedIndex = sessionStorage.getItem('quizIndex');
  //   console.log(JSON.parse(savedIndex) )
  //   return savedIndex !== null ? JSON.parse(savedIndex) : 0;
  // });

  // sessionStorage.setItem('quizIndex', JSON.stringify(currentQuestionIndex));

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(() => {
    const savedIndex = Cookies.get('quizIndex');
    return savedIndex ? JSON.parse(savedIndex) : 0;
  });


  Cookies.set('quizIndex', JSON.stringify(currentQuestionIndex));

  // set all value of data in state
  const [selectedAnswer, setSelectedAnswer] = useState('');
  const [currcount, setCurrcount] = useState(0);
  const [incurrcount, setIncurrcount] = useState(0);
  const [randomid, setRandomid] = useState("");
  const [answer_given, setAnswer_given] = useState("");
  const navigate = useNavigate()
  const [quiz, setQuiz] = useState([]);
  const [desc, setDesc] = useState('');
  const [correctAnswer, setCorrectAnswer] = useState(0);
  const [choice, setChoice] = useState([]);
  const [imageUrl, setImageUrl] = useState("");
  const [question_id, setQuestion_id] = useState(0);
  const [noofquestions, setNoofquestions] = useState(0);
  const [option_type, setOption_type] = useState('0');
  const[status,setStatus]=useState('');
  const [Clicked, setClicked] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);

  useEffect(() => {
    // alert("run api");
      ; (async () => {
        sessionStorage.setItem('quizIndex', JSON.stringify(currentQuestionIndex));
        try {
           const fetcEndPoint='earndiamond/playsolo'
           let result =null // Replace with your endpoint
           result= result===null?await fetchData(id,user_id,BASE_URL,fetcEndPoint,tok):result;
          setQuiz(result.contest_details.contestdata[0].quiz);
          setDesc(result.contest_details.contestdata[0].quiz[currentQuestionIndex].ques_desc)
          setChoice((result.contest_details.contestdata[0].quiz[currentQuestionIndex].option))
          setImageUrl((result.contest_details.contestdata[0].quiz[currentQuestionIndex].ques_source_url))
          setQuestion_id((result.contest_details.contestdata[0].quiz[currentQuestionIndex].id))
          setCorrectAnswer((result.contest_details.contestdata[0].quiz[currentQuestionIndex].answer[0]))
          setNoofquestions((result.contest_details.contestdata[0].number_of_questions))
          setStatus(result.contest_details.playedstatus)
          setOption_type((result.contest_details.contestdata[0].quiz[currentQuestionIndex].option_type))
              } catch (error) {
          console.log(error)
        }
      })()
    }, [currentQuestionIndex]);
 if(status==1){
  navigate(`/QuizInfo/${id}`);
  return
 }

// Method to calculate right answer
 const handleAnswerClick = (option, indx) => {
    setClicked(indx);
    setSelectedAnswer(indx);
    setRandomid(randomid == "" ? randomid + question_id : randomid + "|" + question_id)
    setAnswer_given(answer_given == "" ? answer_given + (indx + 1) : answer_given + "|" + (indx + 1))
    if ((indx + 1) == correctAnswer) {
      setIsCorrect(true)
      setCurrcount(currcount + 1)
    } else {
      setIncurrcount(incurrcount + 1)
      setIsCorrect(false)
    }
    setTimeout(nextQuestion, 1500); 
    // Move to next question after 1 second
  };
  // move to next question 
  const nextQuestion = () => {
    setIsCorrect(null)
    setClicked(null)
    setSelectedAnswer('');
    if (currentQuestionIndex < quiz.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {  
      alert("completed")
      setCurrentQuestionIndex(0);
      setCurrcount(0)
      setIncurrcount(0)
      setRandomid("")
      setAnswer_given("")
      InsertIntoApi();
     // Reset the quiz
    }
  };
  // Insert data into database after submit quiz
  const InsertIntoApi = async () => {
    try {
      const Url = `${BASE_URL}/quiz/summaryearndiamond`;
      const token =`${tok}`;
      const rawData = {
        "category_id": id,
        "user_id": user_id,
        "time_taken": "30",
        "random_ques_ids": randomid,
        "correct_count": currcount,
        "contest_id": "0",
        "ques_attempted": currcount + incurrcount,
        "answer_given": answer_given,
        "total_ques": noofquestions,
        "language_id": "2",
        "is_watch_video": "0",
        "bonus": "0",
        "event": "Earn Diamond",
        "coin_earned":"100"
      };

      const response = await fetch(Url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${token}`,
        },
        body: JSON.stringify(rawData),
      });
      if (!response.ok) {
        throw new Error('some error');
      }
      const jsonData = await response.json();
      console.log(jsonData);
    } catch (error) {
      console.log(error)
    }
    navigate(`/QuizInfo/${id}`); 
   }
  return (
    <>
      <div className="q_i_top">
        <div className="q_i_remain">
          <p>No. of Questions: {(currentQuestionIndex) + 1} / 30</p>
        </div>
       
      </div>
      {/* if image is availble*/}
      {/* <div class="quiz_data">
          <h2 class="ques_txt">After the Elephants, the heaviest land mammals are the Rhinoceros.</h2>
          
          <img src="./images/games_slide.png" alt="image"  class="quest_img">
          <button class="options right_ans">True</button>
          <button class="options">False</button>
          <button class="options wrong_ans">False</button>
          <button class="options">False</button>
      </div */}
      {/* if image based options*/}
      <div className="quiz_data">
        <h2 className="ques_txt">
          {desc}
        </h2>
        {imageUrl &&
          <img src={imageUrl} />
        }
        <div className="imgg_options text_options" >
          {choice.map((option, indx) => (
            <button onClick={() => handleAnswerClick(option, indx)} key={indx}  disabled={Clicked!=null}  style={{
              backgroundColor: selectedAnswer === indx
                ? isCorrect
                  ? '#39FF14'
                  : '#f91d1d'
                : 'white', 
              color: selectedAnswer === indx ? 'white' : 'black'
            }} className={`options`} >
                 {option_type==1?<img src={option}></img>: <p  >{option}</p>}    
            </button>
          ))}

        </div>
      </div>

    </>
  )
}

export default QuestionsScreen
