import styles from "@/styles/createFlashcard.module.css"
import { useState } from 'react';

const CreateFlashcard = () => {
    const [flashcards, setFlashcards] = useState([]);
    const [idCounter, setIdCounter] = useState(1);
    const handleAddFlashcard = () => {
        setFlashcards([...flashcards, { id: idCounter, text: '' }]);
        setIdCounter(idCounter + 1);
    };
    const handleFlashcardChange = (id, event) => {
        const updatedFlashcards = flashcards.map(flashcard => {
            if (flashcard.id === id) {
                return { ...flashcard, text: event.target.value };
            }
            return flashcard;
        });
        setFlashcards(updatedFlashcards);
    };
    return (
        <main className={styles.main}>
            <div className={styles.body}>
                <h1 className={styles.h1}>Flashcards</h1>
                <h6 className={styles.h6}>ID:987654321</h6>
                <input className={styles.nameInput} type="text" placeholder="NAME" required />

                {flashcards.map(flashcard => (
                    <div key={flashcard.id} className={styles.card}>
                        <input
                            className={styles.input}
                            type="text"
                            value={flashcard.text}
                            onChange={(e) => handleFlashcardChange(flashcard.id, e)}
                            placeholder={`Flashcard #${flashcard.id}`}
                            required
                        />
                    </div>
                ))}
                <div className="wrap">
                    <button className={styles.addButton} onClick={handleAddFlashcard}>+</button>
                </div>
                <a href="mainPage">
                    <div className="wrap">
                        <button className={styles.saveButton}>Save</button>
                    </div>
                </a>
            </div>
        </main>
    );
}

export default CreateFlashcard;