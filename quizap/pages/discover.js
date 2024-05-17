import styles from "@/styles/discover.module.css"
import MainNavbar from "@/comps/MainNavbar";
import SideBar from "@/comps/SideBar";
import Footer from "@/comps/Footer";
import Slider from "react-slick";
import Image from "next/image";
import React, { useState } from 'react';
import QuizCard from "@/comps/QuizCard";
import FlashcardsCard from "@/comps/FlashcardsCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const settings = {

    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

};
const discover = () => {
    const [activeTab, setActiveTab] = useState('quizzes');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };
    return ( 
        <div>
            <MainNavbar />
            <div className={styles.main}>
                <h1 className={styles.headerStyle}>Discover</h1>
                <div className={styles.tabs}>
                    <button onClick={() => handleTabClick('quizzes')} className={activeTab === 'quizzes' ? styles.active : styles.inactive}>Quizzes</button>
                    <button onClick={() => handleTabClick('flashcards')} className={activeTab === 'flashcards' ? styles.active : styles.inactive}>Flashcards</button>
                </div>
                <div className={styles.section}>
                    <h1 className={styles.sectionHeading}>Most Popular</h1>
                    {activeTab === 'quizzes' && (
                        <div className={styles.container}>
                            <div className={styles.slider}>
                                <Slider {...settings} >
                                    <QuizCard quizName={"Quiz Name"} numQuestions={10} quizOwner={"User"} />
                                    <QuizCard quizName={"Quiz Name"} numQuestions={10} quizOwner={"User"} />
                                    <QuizCard quizName={"Quiz Name"} numQuestions={10} quizOwner={"User"} />
                                    <QuizCard quizName={"Quiz Name"} numQuestions={10} quizOwner={"User"} />
                                    <QuizCard quizName={"Quiz Name"} numQuestions={10} quizOwner={"User"} />
                                    <QuizCard quizName={"Quiz Name"} numQuestions={10} quizOwner={"User"} />
                                </Slider>
                            </div>
                        </div>
                    )}
                    {activeTab === 'flashcards' && (
                        <div className={styles.container}>
                            <div className={styles.slider}>
                                <Slider {...settings} >
                                    <FlashcardsCard flashcardsName={"Flashcards"} numCards={10} flashcardsOwner={"User"} />
                                    <FlashcardsCard flashcardsName={"Flashcards"} numCards={10} flashcardsOwner={"User"} />
                                    <FlashcardsCard flashcardsName={"Flashcards"} numCards={10} flashcardsOwner={"User"} />
                                    <FlashcardsCard flashcardsName={"Flashcards"} numCards={10} flashcardsOwner={"User"} />
                                    <FlashcardsCard flashcardsName={"Flashcards"} numCards={10} flashcardsOwner={"User"} />
                                    <FlashcardsCard flashcardsName={"Flashcards"} numCards={10} flashcardsOwner={"User"} />
                                </Slider>
                            </div>
                        </div>
                    )}
                </div>
                <div className={styles.section}>
                    <h1 className={styles.sectionHeading}>Local</h1>
                    {activeTab === 'quizzes' && (
                        <div className={styles.container}>
                            <div className={styles.slider}>
                                <Slider {...settings} >
                                    <QuizCard quizName={"Quiz Name"} numQuestions={10} quizOwner={"User"} />
                                    <QuizCard quizName={"Quiz Name"} numQuestions={10} quizOwner={"User"} />
                                    <QuizCard quizName={"Quiz Name"} numQuestions={10} quizOwner={"User"} />
                                    <QuizCard quizName={"Quiz Name"} numQuestions={10} quizOwner={"User"} />
                                    <QuizCard quizName={"Quiz Name"} numQuestions={10} quizOwner={"User"} />
                                    <QuizCard quizName={"Quiz Name"} numQuestions={10} quizOwner={"User"} />
                                </Slider>
                            </div>
                        </div>
                    )}
                    {activeTab === 'flashcards' && (
                        <div className={styles.container}>
                            <div className={styles.slider}>
                                <Slider {...settings} >
                                    <FlashcardsCard flashcardsName={"Flashcards"} numCards={10} flashcardsOwner={"User"} />
                                    <FlashcardsCard flashcardsName={"Flashcards"} numCards={10} flashcardsOwner={"User"} />
                                    <FlashcardsCard flashcardsName={"Flashcards"} numCards={10} flashcardsOwner={"User"} />
                                    <FlashcardsCard flashcardsName={"Flashcards"} numCards={10} flashcardsOwner={"User"} />
                                    <FlashcardsCard flashcardsName={"Flashcards"} numCards={10} flashcardsOwner={"User"} />
                                    <FlashcardsCard flashcardsName={"Flashcards"} numCards={10} flashcardsOwner={"User"} />
                                </Slider>
                            </div>
                        </div>
                    )}
                </div>
            </div>

            <SideBar/>
            <Footer />
            
        </div>
    );
}
 
export default discover;