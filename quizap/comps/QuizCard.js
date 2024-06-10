import styles from "@/styles/quizCard.module.css";
import Link from "next/link";

const QuizCard = ({ id, quizName, numQuestions, quizOwner, imageUrl }) => {
    return (
        <Link href={`/quiz/${id}`} className={styles.quizCard} style={{ 
            backgroundImage: `url(${imageUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
            }}>
            <div className={styles.textBackground}>
                <h1 className={styles.quizName}>{quizName}</h1>
                <h2 className={styles.numQuestions}>{numQuestions} Questions</h2>
                <p className={styles.quizOwner}>Created by: {quizOwner}</p>
            </div>
        </Link>
    )
}

export default QuizCard;