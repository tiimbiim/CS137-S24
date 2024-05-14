import styles from "@/styles/quiz.module.css";
import { useState, useReducer } from "react";
import Link from "next/link";

function reducer(state, action) {
    if (action.type === 'correct') {
        return {
            question: state.question + 1,
            points: state.points + 1
        };
    }
    else if (action.type === 'incorrect') {
        return {
            question: state.question + 1,
            points: state.points
        };
    }
    throw Error('Unknown action.');
}

const QuizPage = () => {
    const [state, dispatch] = useReducer(reducer, {question: 1, points: 0});

    const sampleQuiz = [
        {type: "multiple-choice", question: "What is the largest animal on Earth?", answers: ["Blue Whale", "Elephant", "Giraffe", "Anteater"], correctAnswer: "Blue Whale"},
        {type: "multiple-choice", question: "Second Question?", answers: ["Answer4", "Answer2", "Answer1", "Answer3"], correctAnswer: "Answer3"},
        {type: "true-false", question: "This is a true/false question.", correctAnswer: "true"}
    ];

    return (
        <div className={styles.quizPage}>
            {state.question <= sampleQuiz.length &&
                <div>
                    <h1 className={styles.header}>Question {state.question}</h1>
                    {sampleQuiz[state.question-1].type === "multiple-choice" &&
                        <MultipleChoiceQuestion question={sampleQuiz[state.question-1]} dispatch={dispatch} />}
                    {sampleQuiz[state.question-1].type === "true-false" &&
                        <TrueFalseQuestion question={sampleQuiz[2]} dispatch={dispatch} />}
                </div>
            }
            <h1 className={styles.header}>Points: {state.points}</h1>
            <Link href="/mainPage" className={styles.homeButton}>Back to Home</Link>
        </div>
    )
}

const MultipleChoiceQuestion = ({ question, dispatch }) => {

    const checkAnswer = (i) => {
        if (question.answers[i] === question.correctAnswer) {
            dispatch({type: "correct"});
        }
        else {
            dispatch({type: "incorrect"});
        }
    }

    return (
        <div className={styles.multipleChoiceQ}>
            <div className={styles.prompt}>
                <h1>{question.question}</h1>
            </div>
            <div className={styles.answers}>
                <button className={styles.MCbutton} onClick={() => checkAnswer(0)}>
                    {question.answers[0]}
                </button>
                <button className={styles.MCbutton} onClick={() => checkAnswer(1)}>
                    {question.answers[1]}
                </button>
                <button className={styles.MCbutton} onClick={() => checkAnswer(2)}>
                    {question.answers[2]}
                </button>
                <button className={styles.MCbutton} onClick={() => checkAnswer(3)}>
                    {question.answers[3]}
                </button>
            </div>
        </div>
    )
}

const TrueFalseQuestion = ({ question, dispatch }) => {

    const checkAnswer = (answer) => {
        if (answer === question.correctAnswer) {
            dispatch({type: "correct"});
        }
        else {
            dispatch({type: "incorrect"});
        }
    } 

    return (
        <div className={styles.trueFalseQ}>
            <div className={styles.prompt}>
                <h1>This question is a true/false question.</h1>
            </div>
            <div className={styles.answers}>
                <button className={styles.trueButton} onClick={() => checkAnswer("true")}>
                    TRUE
                </button>
                <button className={styles.falseButton} onClick={() => checkAnswer("false")}>
                    FALSE
                </button>
            </div>
        </div>
    )
}

export default QuizPage;