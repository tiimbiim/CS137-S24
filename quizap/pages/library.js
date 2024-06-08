import styles from "@/styles/library.module.css"
import MainNavbar from "@/comps/MainNavbar";
import Footer from "@/comps/Footer";
import SideBar from "@/comps/SideBar";
import React, { useState, useEffect } from 'react';
import { doc, collection, getDocs } from 'firebase/firestore';
import { db, storage, auth } from '../firebase.config'
import Link from "next/link";

const library = () => {
    const [activeTab, setActiveTab] = useState('quizzes');
    const [quizzes, setQuizzes] = useState([]);
    const [users, setUsers] = useState({});

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    useEffect(() => {
        const fetchQuizzes = async () => {
            const querySnapshot = await getDocs(collection(db, "quizzes"));
            const quizList = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
            setQuizzes(quizList);

            const userQuerySnapshot = await getDocs(collection(db, "users"));
            const userList = userQuerySnapshot.docs.reduce((acc, doc) => {
                acc[doc.id] = doc.data();
                return acc;
            }, {});

            setQuizzes(quizList);
            setUsers(userList);
        };
    
        fetchQuizzes();
    }, []);
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
                    <a href={activeTab === 'quizzes' ? "createQuiz" : "createFlashcard"} className={styles.addButton}>
                        +
                    </a>
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
                                <li className={styles.listStyle}><a className={styles.anchorStyle} href="createFlashcard">aaa | Created by Xxxxx | 1000 flashcards | Mar 10 2024</a><a className={styles.playButton} href="flashcards/ID">Play</a></li>
                                <li className={styles.listStyle}><a className={styles.anchorStyle} href="createFlashcard">bbb | Created by Xxxxx | 50 flashcards | Feb 10 2024</a><a className={styles.playButton} href="flashcards/ID">Play</a></li>
                                <li className={styles.listStyle}><a className={styles.anchorStyle} href="createFlashcard">ccc | Created by Xxxxx | 25 flashcards | Feb 6 2024</a><a className={styles.playButton} href="flashcards/ID">Play</a></li>
                                <li className={styles.listStyle}><a className={styles.anchorStyle} href="createFlashcard">ddd | Created by Xxxxx | 35 flashcards | Jan 20 2024</a><a className={styles.playButton} href="flashcards/ID">Play</a></li>
                                <li className={styles.listStyle}><a className={styles.anchorStyle} href="createFlashcard">eee | Created by Xxxxx | 50 flashcards | Jan 15 2024</a><a className={styles.playButton} href="flashcards/ID">Play</a></li>
                                <li className={styles.listStyle}><a className={styles.anchorStyle} href="createFlashcard">fff | Created by Xxxxx | 60 flashcards | Jan 10 2024</a><a className={styles.playButton} href="flashcards/ID">Play</a></li>
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