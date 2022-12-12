import Question from './Question';
import { useContext } from 'react';
import { QuizContext } from '../contexts/quiz';

const Quiz = () => {

  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="quiz">
      {quizState.resultsReached ? <Results/> : null}
      {!quizState.resultsReached ? 
      <>
        <div className="score">Question {quizState.currentQuestionIndex + 1}/8</div>
        <Question/>
        <div className="next-button" onClick={() => dispatch({type:'NEXT_QUESTION'})}>Next question</div>
      </>
      : null}
    </div>
  )
}

const Results = () => {

  const [quizState, dispatch] = useContext(QuizContext);

  return (
    <div className="results">
      <div className="congratulations">Congratulations!</div>
      <div className="results-info">
      <div>You have completed the quiz.</div>
        You got {quizState.correctAnswerCount}/{quizState.questions.length} questions right
      </div>
      <button className="next-button" onClick={() => dispatch({type:'RESTART'})}>Restart</button>
    </div>
  )
}

export default Quiz;