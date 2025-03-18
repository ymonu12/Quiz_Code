import React from 'react'
import QuestionsScreen from '../Play/QuestionsScreen'
import Right from '../header/Right'

const QuestionScreenRoute = () => {
  return (
    <>
     <div className="section">
     <div className="s_left question_scrn">
    <QuestionsScreen></QuestionsScreen>
    </div>
    <Right></Right>
    </div>
    </>
  )
}

export default QuestionScreenRoute
