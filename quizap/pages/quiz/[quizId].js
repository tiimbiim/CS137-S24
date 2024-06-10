import styles from "@/styles/quiz.module.css";
import { useState, useReducer, useEffect } from "react";
import Link from "next/link";
import { useRouter } from 'next/router';
import { doc, getDoc } from "firebase/firestore";
import { db, auth } from '../../firebase.config';

const user = auth.currentUser;
function reducer(state, action) {
    switch (action.type) {
        case 'correct':
            return {
                question: state.question + 1,
                points: state.points + 1
            };
        case 'incorrect':
            return {
                question: state.question + 1,
                points: state.points
            };
        case 'reset':
            return {
                question: 1,
                points: 0
            };
        default:
            throw new Error('Unknown action.');
    }
}

const QuizPage = () => {
    const router = useRouter();
    const { quizId } = router.query;
    const [state, dispatch] = useReducer(reducer, { question: 1, points: 0 });
    const [quiz, setQuiz] = useState(null);

    useEffect(() => {
        const fetchQuizData = async () => {
            if (quizId) {
                const quizDocRef = doc(db, "quizzes", quizId);
                const quizDoc = await getDoc(quizDocRef);
                if (quizDoc.exists()) {
                    const fetchedQuestions = quizDoc.data().questions || [];
                    setQuiz(fetchedQuestions);
                    console.log("Fetched questions:", fetchedQuestions);
                } else {
                    console.error("No such document!");
                }
            }
        };
        fetchQuizData();
    }, [quizId]);
    
    if (!quiz) {
        return <div>Loading...</div>;
    }
    const checkAnswer = (index, answer) => {
        const isCorrect = quiz[state.question - 1].correctAnswers[index];
        dispatch({ type: isCorrect ? 'correct' : 'incorrect' });
    };

    return (
        <div className={styles.quizPage}>
            {state.question <= quiz.length && (
                <div>
                    <h1 className={styles.header}>Question {state.question}</h1>
                    {quiz[state.question - 1].type === "Multiple Choice" && (
                        <MultipleChoiceQuestion question={quiz[state.question - 1]} checkAnswer={checkAnswer}/>
                    )}
                    {quiz[state.question - 1].type === "True/False" && (
                        <TrueFalseQuestion question={quiz[state.question - 1]} checkAnswer={checkAnswer}/>
                    )}
                </div>
            )}
            {state.question > quiz.length && (
                <div>
                    <h1 className={styles.header}>Quiz Completed!</h1>
                    <h2 className={styles.header}>You scored {state.points} out of {quiz.length}</h2>
                    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', margin: '20px 0' }}>
                        <button onClick={() => dispatch({ type: 'reset' })}>Restart Quiz</button>
                    </div>
                </div>
            )}
            <h1 className={styles.header}>Points: {state.points}</h1>
            <Link href={user ? "/mainPage" : "/joinQuiz"} className={styles.homeButton} onClick={() => dispatch({ type: 'reset' })}>{user ? "Back to Home" : "Back"}</Link></div>);
};

const MultipleChoiceQuestion = ({ question, checkAnswer }) => {
    return (
        <div className={styles.multipleChoiceQ}>
            <div className={styles.prompt}><h1>{question.text}</h1></div>
            <div className={styles.answers}>
                {question.answers.map((answer, i) => (
                    <button key={i} className={styles.MCbutton} onClick={() => checkAnswer(i, answer)}>{answer}</button>
                ))}
            </div>
        </div>
    );
};

const TrueFalseQuestion = ({ question, checkAnswer }) => {
    return (
        <div className={styles.trueFalseQ}>
            <div className={styles.prompt}><h1>{question.text}</h1></div>
            <div className={styles.answers}>
                <button className={styles.trueButton} onClick={() => checkAnswer(0, 'True')}>TRUE</button>
                <button className={styles.falseButton} onClick={() => checkAnswer(1, 'False')}>FALSE</button>
            </div>
        </div>
    );
};

export default QuizPage;
