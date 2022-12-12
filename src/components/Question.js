import { useContext } from 'react';
import { QuizContext } from '../contexts/quiz';
import Answer from './Answer';

const Question = () => {

  const [quizState, dispatch] = useContext(QuizContext);

  const currentQuestion = quizState.questions[quizState.currentQuestionIndex];

  return (
    <>
      <div className="question">
        {currentQuestion.question}
      </div>
      <div className="answers">
        {quizState.answers.map((answer, index) => {
          return <Answer 
          index={index} 
          answerText={answer} 
          key={index} 
          currentAnswer={quizState.currentAnswer}
          correctAnswer={currentQuestion.correctAnswer}
          onAnswer={(answerText) => {dispatch({type:'ANSWER', payload: answerText})}}/>
        })}
      </div>
    </>
  )
}
export default Question;