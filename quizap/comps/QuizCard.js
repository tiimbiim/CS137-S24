import styles from "@/styles/quizCard.module.css";
import Link from "next/link";

const QuizCard = ({ quizName, numQuestions, quizOwner}) => {
    return (
        <Link href="quiz/ID" className={styles.quizCard}>
            <h1 className={styles.quizName}>{quizName}</h1>
            <h2 className={styles.numQuestions}>{numQuestions} Questions</h2>
            <p className={styles.quizOwner}>Created by: {quizOwner}</p>
        </Link>
    )
}

export default QuizCard;