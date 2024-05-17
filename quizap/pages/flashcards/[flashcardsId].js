import { useState } from 'react';
import styles from "@/styles/useFlashcard.module.css";
import Link from 'next/link';

const UseFlashcard = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [flashcardNum, setFlashcardNum] = useState(0);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const sampleFlashcards = [
        {side1: "SIDE 1", side2: "SIDE 2"},
        {side1: "FRONT", side2: "BACK"},
        {side1: "HEAD", side2: "TAIL"},
        {side1: "What is this, a question?", side2: "Hm, yes, and it seems like this is an answer!"}
    ];

    const increment = () => {
        if (flashcardNum + 1 < sampleFlashcards.length) {
            setFlashcardNum(flashcardNum + 1);
        }
    }

    const decrement = () => {
        if (flashcardNum - 1 >= 0) {
            setFlashcardNum(flashcardNum - 1);
        }
    }

    return (
        <main className={styles.main}>
            <div className={styles.navButtons}>
                <button className={styles.navButton} onClick={() => decrement()}>&lt;</button>
                <button className={styles.navButton} onClick={() => increment()}>&gt;</button>
            </div>
            <div className={`${styles.card} ${isFlipped ? styles.flipped : ''}`} onClick={handleFlip}>
                <div className={styles.inner}>
                    <div className={styles.front}>
                        <h1>{sampleFlashcards[flashcardNum].side1}</h1>
                    </div>
                    <div className={styles.back}>
                        <h1>{sampleFlashcards[flashcardNum].side2}</h1>
                    </div>
                </div>
            </div>
            <Link href="/mainPage" className={styles.homeButton}>Back to Home</Link>
        </main>
    );
}

export default UseFlashcard;