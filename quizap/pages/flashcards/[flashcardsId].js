import { useState, useEffect } from 'react';
import styles from "@/styles/useFlashcard.module.css";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { doc, getDoc } from 'firebase/firestore';
import { db, auth } from '../../firebase.config'

const UseFlashcard = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const [flashcardNum, setFlashcardNum] = useState(0);
    const [flashcards, setFlashcards] = useState([]);
    const [name, setName] = useState("");
    const router = useRouter();
    const user = auth.currentUser;
    const flashcardsId = router.query.flashcardsId;

    useEffect(() => {
        const fetchFlashcardsData = async () => {
            if (flashcardsId) {
                const flashcardsDocRef = doc(db, "flashcards", flashcardsId);
                const flashcardsDoc = await getDoc(flashcardsDocRef);
                if (flashcardsDoc.exists()) {
                    const fetchedCards = flashcardsDoc.data().flashcards || [];
                    setFlashcards(fetchedCards);
                    setName(flashcardsDoc.data().name);
                }
            }
        };
        fetchFlashcardsData();
    }, [flashcardsId]);

    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };

    const increment = () => {
        if (flashcardNum + 1 < flashcards.length) {
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
            <div className={styles.headers}>
                <h1 className={styles.heading}>{name}</h1>
                <h2 className={styles.heading}>Showing: {!isFlipped ? "FRONT" : "BACK"}</h2>
            </div>
            {flashcards.length > 0 && <>
                <div className={styles.navButtons}>
                    <button className={styles.navButton} onClick={() => decrement()}>&lt;</button>
                    <button className={styles.navButton} onClick={() => increment()}>&gt;</button>
                </div>
                <div className={`${styles.card} ${isFlipped ? styles.flipped : ''}`} onClick={handleFlip}>
                    <div className={styles.inner}>
                        <div className={styles.front}>
                            <h1>{flashcards[flashcardNum].side1}</h1>
                        </div>
                        <div className={styles.back}>
                            <h1>{flashcards[flashcardNum].side2}</h1>
                        </div>
                    </div>
                </div>
            </>}
            <Link href={user ? "/mainPage" : "/joinQuiz"} className={styles.homeButton}>{user ? "Back to Home" : "Back"}</Link>
        </main>
    );
}

export default UseFlashcard;