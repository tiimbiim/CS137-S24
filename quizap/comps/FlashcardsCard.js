import styles from "@/styles/flashcardsCard.module.css";
import Link from "next/link";

const FlashcardsCard = ({ flashcardsName, numCards, flashcardsOwner}) => {
    return (
        <Link href="flashcards/ID" className={styles.flashcardsCard}>
            <h1 className={styles.flashcardsName}>{flashcardsName}</h1>
            <h2 className={styles.numCards}>{numCards} Flashcards</h2>
            <p className={styles.flashcardsOwner}>Created by: {flashcardsOwner}</p>
        </Link>
    )
}

export default FlashcardsCard;