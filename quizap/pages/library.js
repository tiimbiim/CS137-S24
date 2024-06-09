import styles from "@/styles/library.module.css"
import MainNavbar from "@/comps/MainNavbar";
import Footer from "@/comps/Footer";
import SideBar from "@/comps/SideBar";
import React, { useState, useEffect } from 'react';
import { doc, collection, getDocs, where, query, addDoc } from 'firebase/firestore';
import { db, storage, auth } from '../firebase.config'
import Link from "next/link";
import { useRouter } from "next/router";

const library = () => {
    const [activeTab, setActiveTab] = useState('quizzes');
    const [quizzes, setQuizzes] = useState([]);
    const [flashcards, setFlashcards] = useState([]);
    const [users, setUsers] = useState({});
    const router = useRouter();
    const user = auth.currentUser;

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    useEffect(() => {
        const fetchQuizzes = async () => {
            const quizzesRef = collection(db, "quizzes");
            const userQuizzesQuery = query(quizzesRef, where("owner", "==", user.uid));

            const querySnapshot = await getDocs(userQuizzesQuery);
            const quizList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setQuizzes(quizList);

            const userQuerySnapshot = await getDocs(collection(db, "users"));
            const userList = userQuerySnapshot.docs.reduce((acc, doc) => {
                acc[doc.id] = doc.data();
                return acc;
            }, {});
            setUsers(userList);
        };
        const fetchFlashcards = async () => {
            if (user) {
                const flashcardsRef = collection(db, "flashcards");
                const userFlashcardsQuery = query(flashcardsRef, where("owner", "==", user.uid));
                const querySnapshot = await getDocs(userFlashcardsQuery);
                const flashcardsList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
                setFlashcards(flashcardsList);
            }
        };
        fetchQuizzes();
        fetchFlashcards();
    }, []);

    const handleAddFlashcards = async () => {
        try {
            const docRef = await addDoc(collection(db, "flashcards"), {
                name: "",
                flashcards: [],
                owner: user.uid
            });
            router.push(`/editFlashcards/${docRef.id}`);
        }
        catch {
            alert("There was an error creating your flashcards!");
        }
    }

    return ( 
        <div>
            <MainNavbar />
            <div className={styles.main}>
                <h1 className={styles.headerStyle}>Library</h1>
                <div className={styles.content}>
                    <div className={styles.tabs}>
                        <button onClick={() => handleTabClick('quizzes')} className={activeTab === 'quizzes' ? styles.active : styles.inactive}>Quizzes</button>
                        <button onClick={() => handleTabClick('flashcards')} className={activeTab === 'flashcards' ? styles.active : styles.inactive}>Flashcards</button>
                    </div>
                    {activeTab === 'quizzes' &&
                    <a href={"createQuiz"} className={styles.addButton}>
                        +
                    </a>}
                    {activeTab === 'flashcards' &&
                    <button className={styles.addButton} onClick={handleAddFlashcards}>
                        +
                    </button>}
                    <div>
                        {activeTab === 'quizzes' && (
                            <ul>
                                {quizzes.map((quiz) => (
                                    <li key={quiz.id} className={styles.listStyle}>
                                        <a className={styles.anchorStyle} href={`editQuiz/${quiz.id}`}>
                                            {quiz.name} | Created by {users[quiz.owner]?.username} | {quiz.numQuestions} questions
                                        </a>
                                        <a className={styles.playButton} href={`quiz/${quiz.id}`}>Play</a>
                                    </li>
                                ))}
                            </ul>
                        )}
                        {activeTab === 'flashcards' && (
                            <ul>
                                {flashcards.map((cards) => (
                                    <li key={cards.id} className={styles.listStyle}>
                                        <a className={styles.anchorStyle} href={`editFlashcards/${cards.id}`}>
                                            {cards.name} | Created by {users[cards.owner]?.username} | {cards.flashcards.length} flashcards
                                        </a>
                                        <a className={styles.playButton} href={`flashcards/${cards.id}`}>Play</a>
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                </div>
            </div>
            <SideBar />
            <Footer />
        </div>
     );
}
 
export default library;