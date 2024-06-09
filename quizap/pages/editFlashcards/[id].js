import styles from "@/styles/createFlashcard.module.css";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { doc, getDoc, updateDoc, arrayUnion, increment } from 'firebase/firestore';
import { db, storage, auth } from '../../firebase.config'

const CreateFlashcard = () => {
    const [flashcards, setFlashcards] = useState([]);
    const [idCounter, setIdCounter] = useState(1);
    const [name, setName] = useState("");

    const router = useRouter();
    const flashcardsId = router.query.id;
    const user = auth.currentUser;

    useEffect(() => {
        const fetchFlashcardsData = async () => {
            if (flashcardsId) {
                const flashcardsDocRef = doc(db, "flashcards", flashcardsId);
                const flashcardsDoc = await getDoc(flashcardsDocRef);
                if (flashcardsDoc.exists()) {
                    const fetchedCards = flashcardsDoc.data().flashcards || [];
                    let flashcardsArray = [];
                    for (let i = 0; i < fetchedCards.length; i++) {
                        flashcardsArray.push({ id: i, side1: fetchedCards[i].side1, side2: fetchedCards[i].side2 });
                    }
                    setFlashcards(flashcardsArray);
                    setIdCounter(flashcardsArray.length + 1);
                    setName(flashcardsDoc.data().name);
                }
            }
        };
        fetchFlashcardsData();
    }, [flashcardsId]);

    const handleAddFlashcard = () => {
        setFlashcards([...flashcards, { id: idCounter, side1: '', side2: '' }]);
        setIdCounter(idCounter + 1);
    };
    const handleFlashcardChange = (id, side, value) => {
        const updatedFlashcards = flashcards.map(flashcard => {
            if (flashcard.id === id) {
                return { ...flashcard, [side]: value };
            }
            return flashcard;
        });
        setFlashcards(updatedFlashcards);
    };
    const handleDeleteFlashcard = (id) => {
        const updatedFlashcards = flashcards.filter(flashcard => flashcard.id !== id);
        setFlashcards(updatedFlashcards);
    };

    const handleSaveFlashcards = async () => {
        if (name === '') {
            alert('Please enter a name for your flashcards at the top.');
            return;
        }
        const flashcardsDocRef = doc(db, "flashcards", flashcardsId);
        try {
            await updateDoc(flashcardsDocRef, {
                name: name,
                flashcards: flashcards
            });
            alert('Flashcards saved successfully!');
            router.push('/library');
        }
        catch (error) {
            console.error("Error saving flashcards:", error);
        }
    };
    return (
        <main className={styles.main}>
            <div className={styles.body}>
                <h1 className={styles.h1}>Flashcards</h1>
                <h6 className={styles.h6}>ID: {flashcardsId}</h6>
                <input className={styles.nameInput} type="text" placeholder="NAME" defaultValue={name} onChange={e => setName(e.target.value)} required />

                {flashcards.map(flashcard => (
                    <div key={flashcard.id} className={styles.card}>
                        <textarea
                            className={styles.input}
                            type="text"
                            value={flashcard.side1}
                            onChange={(e) => handleFlashcardChange(flashcard.id, 'side1', e.target.value)}
                            placeholder={'SIDE 1'}
                            required
                        />
                        <textarea
                            className={styles.input}
                            type="text"
                            value={flashcard.side2}
                            onChange={(e) => handleFlashcardChange(flashcard.id, 'side2', e.target.value)}
                            placeholder={'SIDE 2'}
                            required
                        />
                        <button className={styles.deleteButton} onClick={() => handleDeleteFlashcard(flashcard.id)}>X</button>
                    </div>
                ))}
                <div className="wrap">
                    <button className={styles.addButton} onClick={handleAddFlashcard}>+</button>
                </div>
                <div className="wrap"><button className={styles.saveButton} onClick={handleSaveFlashcards}>Save</button></div>
                <a href="/library"><div><button>Back</button></div></a>
            </div>
        </main>
    );
}

export default CreateFlashcard;