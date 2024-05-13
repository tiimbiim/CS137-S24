import styles from "@/styles/mainPage.module.css"
import MainNavbar from "@/comps/MainNavbar";
import SideBar from "@/comps/SideBar";
import Footer from "@/comps/Footer";
import QuizCard from "@/comps/QuizCard";
import React from "react";
import Slider from "react-slick";
import Image from "next/image";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import FlashcardsCard from "@/comps/FlashcardsCard";

const settings = {

    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

};
const mainPage = () => {
    return ( 
        <div>
            <MainNavbar />
            <div className={styles.main}>
                <h1 className={styles.section}>Your Quizzes</h1>
                <div className={styles.container}>
                    <div className={styles.slider}>
                        <Slider {...settings} >
                            <QuizCard quizName={"Quiz Name"} numQuestions={10} quizOwner={"User"}/>
                            <QuizCard quizName={"Quiz Name"} numQuestions={10} quizOwner={"User"}/>
                            <QuizCard quizName={"Quiz Name"} numQuestions={10} quizOwner={"User"}/>
                            <QuizCard quizName={"Quiz Name"} numQuestions={10} quizOwner={"User"}/>
                            <QuizCard quizName={"Quiz Name"} numQuestions={10} quizOwner={"User"}/>
                            <QuizCard quizName={"Quiz Name"} numQuestions={10} quizOwner={"User"}/>
                        </Slider>
                    </div>
                </div>
                <h1 className={styles.section2}>Your Flashcards</h1>
                <div className={styles.container2}>
                    <div className={styles.slider}>
                        <Slider {...settings} >
                            <FlashcardsCard flashcardsName={"Flashcards"} numCards={10} flashcardsOwner={"User"}/>
                            <FlashcardsCard flashcardsName={"Flashcards"} numCards={10} flashcardsOwner={"User"}/>
                            <FlashcardsCard flashcardsName={"Flashcards"} numCards={10} flashcardsOwner={"User"}/>
                            <FlashcardsCard flashcardsName={"Flashcards"} numCards={10} flashcardsOwner={"User"}/>
                            <FlashcardsCard flashcardsName={"Flashcards"} numCards={10} flashcardsOwner={"User"}/>
                            <FlashcardsCard flashcardsName={"Flashcards"} numCards={10} flashcardsOwner={"User"}/>
                        </Slider>
                    </div>
                </div>
            </div>
            <SideBar/>
            <Footer />
            
        </div>


     );
}
 
export default mainPage;