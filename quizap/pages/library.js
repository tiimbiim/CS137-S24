import styles from "@/styles/library.module.css"
import MainNavbar from "@/comps/MainNavbar";
import Footer from "@/comps/Footer";
import SideBar from "@/comps/SideBar";
import React, { useState } from 'react';
import Link from "next/link";

const library = () => {
    const [activeTab, setActiveTab] = useState('quizzes');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
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
                                <li className={styles.listStyle}><a className={styles.anchorStyle} href="editQuiz">AAA | Created by Xxxxx | 1000 questions | Mar 10 2024</a><a className={styles.playButton} href="quiz/ID">Play</a></li>
                                <li className={styles.listStyle}><a className={styles.anchorStyle} href="editQuiz">BBB | Created by Xxxxx | 50 questions | Feb 10 2024</a><a className={styles.playButton} href="quiz/ID">Play</a></li>
                                <li className={styles.listStyle}><a className={styles.anchorStyle} href="editQuiz">CCC | Created by Xxxxx | 25 questions | Feb 6 2024</a><a className={styles.playButton} href="quiz/ID">Play</a></li>
                                <li className={styles.listStyle}><a className={styles.anchorStyle} href="editQuiz">DDD | Created by Xxxxx | 35 questions | Jan 20 2024</a><a className={styles.playButton} href="quiz/ID">Play</a></li>
                                <li className={styles.listStyle}><a className={styles.anchorStyle} href="editQuiz">EEE | Created by Xxxxx | 50 questions | Jan 15 2024</a><a className={styles.playButton} href="quiz/ID">Play</a></li>
                                <li className={styles.listStyle}><a className={styles.anchorStyle} href="editQuiz">FFF | Created by Xxxxx | 60 questions | Jan 10 2024</a><a className={styles.playButton} href="quiz/ID">Play</a></li>
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