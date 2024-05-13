import styles from "@/styles/flashcardsCard.module.css";

const FlashcardsCard = ({ flashcardsName, numCards, flashcardsOwner}) => {
    return (
        <div className={styles.flashcardsCard}>
            <h1 className={styles.flashcardsName}>{flashcardsName}</h1>
            <h2 className={styles.numCards}>{numCards} Questions</h2>
            <p className={styles.flashcardsOwner}>Created by: {flashcardsOwner}</p>
        </div>
    )
}

export default FlashcardsCard;