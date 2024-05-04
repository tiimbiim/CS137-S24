import { useState } from 'react';
import styles from "@/styles/useFlashcard.module.css";

const UseFlashcard = () => {
    const [isFlipped, setIsFlipped] = useState(false);
    const handleFlip = () => {
        setIsFlipped(!isFlipped);
    };
    return (
        <main className={styles.main}>
            <div className={`${styles.card} ${isFlipped ? styles.flipped : ''}`} onClick={handleFlip}>
                <div className={styles.inner}>
                    <div className={styles.front}>
                        <h1>SIDE 1</h1>
                    </div>
                    <div className={styles.back}>
                        <h1>SIDE 2</h1>
                    </div>
                </div>
            </div>
        </main>
    );
}

export default UseFlashcard;