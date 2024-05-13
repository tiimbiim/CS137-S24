import styles from "@/styles/quizCard.module.css";

const QuizCard = ({ quizName, numQuestions, quizOwner}) => {
    return (
        <div className={styles.quizCard}>
            <h1 className={styles.quizName}>{quizName}</h1>
            <h2 className={styles.numQuestions}>{numQuestions} Questions</h2>
            <p className={styles.quizOwner}>Created by: {quizOwner}</p>
        </div>
    )
}

export default QuizCard;