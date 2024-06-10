import styles from "@/styles/joinQuiz.module.css";
import { useRouter } from 'next/router';
import { useState } from 'react';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../firebase.config';

const joinQuiz = () => {
    const router = useRouter();
    const [code, setCode] = useState('');
    const [selectedTab, setSelectedTab] = useState('quiz');

    const handleJoinClick = async () => {
        let path;
        if (selectedTab === 'quiz') {
            path = `/quiz/${code}`;
        } else if (selectedTab === 'flashcard') {
            path = `/flashcards/${code}`;
        }

        const docRef = doc(db, selectedTab === 'quiz' ? 'quizzes' : 'flashcards', code);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            router.push(path);
        } else {
            alert(`${selectedTab === 'quiz' ? 'Quiz' : 'Flashcard'} with ID ${code} not found.`);
        }
    };

    const handleCancelClick = () => {
        router.push('/');
    };

    const handleInputChange = (e) => {
        setCode(e.target.value);
    };

    const handleTabClick = (tab) => {
        setSelectedTab(tab);
    };

    return (
        <main className={styles.main}>
            <div className={styles.tabContainer}>
                <div 
                    className={`${styles.tab} ${selectedTab === 'quiz' ? styles.active : ''}`} 
                    onClick={() => handleTabClick('quiz')}
                >
                    Join Quiz
                </div>
                <div 
                    className={`${styles.tab} ${selectedTab === 'flashcard' ? styles.active : ''}`} 
                    onClick={() => handleTabClick('flashcard')}
                >
                    Join Flashcard
                </div>
            </div>
            <input 
                className={styles.body} 
                placeholder="Enter Code..." 
                value={code} 
                onChange={handleInputChange} 
            />
            <div className={styles.flexContainer}>
                <button className={styles.button} onClick={handleJoinClick}>Join</button>
                <button className={styles.button} onClick={handleCancelClick}>Cancel</button>
            </div>
        </main>
    );
}

export default joinQuiz;