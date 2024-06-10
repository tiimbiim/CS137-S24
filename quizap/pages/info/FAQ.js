import styles from "@/styles/faq.module.css";

const faq = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>Frequently Asked Questions</h1>
            <div className={styles.question}>
                <h2 className={styles.questionHeading}>Question 1: What is QuiZap?</h2>
                <p className={styles.answer}>Answer: QuiZap is an online platform for creating, sharing, and taking quizzes or flashcards.</p>
            </div>
            <div className={styles.question}>
                <h2 className={styles.questionHeading}>Question 2: How do I create a quiz?</h2>
                <p className={styles.answer}>Answer: To create a quiz or flashcards, navigate to the "library" page and click the plus button. Remember to save it after you're done.</p>
            </div>
            <div className={styles.question}>
                <h2 className={styles.questionHeading}>Question 3: Can I share my quizzes with others?</h2>
                <p className={styles.answer}>Answer: Yes, you can share your quizzes by giving the unique id of your quiz/ flashcard. The unique id can be found when you edit quiz/ flashcard. Others can join by passing the id in "discovery" page.</p>
            </div>
            {/* Add more questions and answers here */}
        </div>
    );
}

export default faq;