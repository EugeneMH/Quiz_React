import { createContext, useReducer } from "react";
import questions from '../data';
import { renderAnswers } from "../helpers";

const initialState = {
    questions, 
    currentQuestionIndex: 0,
    correctAnswerCount: 0,
    resultsReached: false,
    answers: renderAnswers(questions[0]),
    currentAnswer: ''
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'NEXT_QUESTION' : 
        console.log(state);
        const resultsReached = state.currentQuestionIndex === questions.length - 1 ? true : false
        return {
            ...state,
            currentQuestionIndex: state.currentQuestionIndex + 1,
            resultsReached,
            answers: resultsReached ? null : renderAnswers(state.questions[state.currentQuestionIndex + 1]),
            currentAnswer: ''
        }
        case 'RESTART' : 
        return {
            ...state, 
            currentQuestionIndex: 0,
            correctAnswerCount: 0,
            resultsReached: false,
            answers: renderAnswers(questions[0])
        }
        case 'ANSWER':
            console.log(action.payload, state.questions[state.currentQuestionIndex].correctAnswer);
            const correctAnswerCount = action.payload === state.questions[state.currentQuestionIndex].correctAnswer ? state.correctAnswerCount + 1 : state.correctAnswerCount
            return {
                ...state,
                currentAnswer: action.payload,
                correctAnswerCount
            }
        default: return state;
    }
}

export const QuizContext = createContext();

export const QuizProvider = ({children}) => {
    const value = useReducer(reducer, initialState);
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}