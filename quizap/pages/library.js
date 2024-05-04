import styles from "@/styles/library.module.css"
import MainNavbar from "@/comps/MainNavbar";
import Footer from "@/comps/Footer"
import SideBar from "@/comps/SideBar";
import React, { useState } from 'react';

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
                        <button onClick={() => handleTabClick('quizzes')} className={activeTab === 'quizzes' ? 'active' : ''}>Quizzes</button>
                        <button onClick={() => handleTabClick('flashcards')} className={activeTab === 'flashcards' ? 'active' : ''}>Flashcards</button>
                    </div>
                    <a href={activeTab === 'quizzes' ? "createQuiz" : "createFlashcard"}>
                        <button className={styles.addButton}>+</button>
                    </a>
                    <div>
                        {activeTab === 'quizzes' && (
                            <ul>
                                <li className={styles.listStyle}><a className={styles.anchorStyle} href="#">AAA | Created by Xxxxx | 1000 items | Mar 10 2024</a></li>
                                <li className={styles.listStyle}><a className={styles.anchorStyle} href="#">BBB | Created by Xxxxx | 50 items | Feb 10 2024</a></li>
                                <li className={styles.listStyle}><a className={styles.anchorStyle} href="#">CCC | Created by Xxxxx | 25 items | Feb 6 2024</a></li>
                                <li className={styles.listStyle}><a className={styles.anchorStyle} href="#">DDD | Created by Xxxxx | 35 items | Jan 20 2024</a></li>
                                <li className={styles.listStyle}><a className={styles.anchorStyle} href="#">EEE | Created by Xxxxx | 50 items | Jan 15 2024</a></li>
                                <li className={styles.listStyle}><a className={styles.anchorStyle} href="#">FFF | Created by Xxxxx | 60 items | Jan 10 2024</a></li>
                            </ul>
                        )}
                        {activeTab === 'flashcards' && (
                            <ul>
                                <li className={styles.listStyle}><a className={styles.anchorStyle} href="#">aaa | Created by Xxxxx | 1000 items | Mar 10 2024</a></li>
                                <li className={styles.listStyle}><a className={styles.anchorStyle} href="#">bbb | Created by Xxxxx | 50 items | Feb 10 2024</a></li>
                                <li className={styles.listStyle}><a className={styles.anchorStyle} href="#">ccc | Created by Xxxxx | 25 items | Feb 6 2024</a></li>
                                <li className={styles.listStyle}><a className={styles.anchorStyle} href="#">ddd | Created by Xxxxx | 35 items | Jan 20 2024</a></li>
                                <li className={styles.listStyle}><a className={styles.anchorStyle} href="#">eee | Created by Xxxxx | 50 items | Jan 15 2024</a></li>
                                <li className={styles.listStyle}><a className={styles.anchorStyle} href="#">fff | Created by Xxxxx | 60 items | Jan 10 2024</a></li>
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