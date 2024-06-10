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
import { db, storage, auth } from '../firebase.config'
import { collection, getDocs, doc, getDoc, where, query } from "firebase/firestore";
import { useState, useEffect } from 'react'
import { getDownloadURL, ref, listAll } from "firebase/storage";

const settings = {

    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,

};
const mainPage = () => {

    const [quizzes, setQuizzes] = useState([]);
    const [flashcards, setFlashcards] = useState([]);

    useEffect(() => {
        const fetchQuizzes = async () => {
            const user = auth.currentUser;
            // return if user is not authenticated
            if (!user) { return; }
            // retrieve only the quizzes created by the current user
            const quizzesRef = collection(db, "quizzes");
            const userQuizzesQuery = query(quizzesRef, where("owner", "==", user.uid));
            const querySnapshot = await getDocs(userQuizzesQuery);

            const quizzesData = await Promise.all(
                querySnapshot.docs.map(async (quizDoc) => {

                    const quizData = quizDoc.data();
                    const ownerDocRef = doc(db, "users", auth.currentUser.uid);
                    const ownerDoc = await getDoc(ownerDocRef);
                    const ownerData = ownerDoc.exists() ? ownerDoc.data() : { username : 'Unknown'};

                    const imageRef = ref(storage, `quizImages/${quizData.owner}/${quizData.name}`);
                    const imageSnapshot = await listAll(imageRef);
                    let imageUrl = '';
                    if(imageSnapshot.items.length > 0) {
                        imageUrl = await getDownloadURL(imageSnapshot.items[0]);
                        console.log("IMAGE URL", imageUrl);
                    }
                    return {
                        id: quizDoc.id,
                        ...quizData,
                        ownerUsername: ownerData.username,
                        imageUrl: imageUrl
                    };
                })
            )
            setQuizzes(quizzesData);
        }
        const fetchFlashcards = async () => {
            const user = auth.currentUser;
            if (!user) return;

            const flashcardsRef = collection(db, "flashcards");
            const userFlashcardsQuery = query(flashcardsRef, where("owner", "==", user.uid));
            const querySnapshot = await getDocs(userFlashcardsQuery);

            const flashcardsData = await Promise.all(
                querySnapshot.docs.map(async (flashcardsDoc) => {
                    const flashcardsData = flashcardsDoc.data();
                    const ownerDocRef = doc(db, "users", flashcardsData.owner);
                    const ownerDoc = await getDoc(ownerDocRef);
                    const ownerData = ownerDoc.exists() ? ownerDoc.data() : { username: 'Unknown' };

                    return {
                        id: flashcardsDoc.id,
                        ...flashcardsData,
                        ownerUsername: ownerData.username,
                    };
                })
            );
            setFlashcards(flashcardsData);
        };

        fetchQuizzes();
        fetchFlashcards();
    }, []);

    return ( 
        <div>
            <MainNavbar />
            <div className={styles.main}>
                <h1 className={styles.section}>Your Quizzes</h1>
                <div className={styles.container}>
                    <div className={styles.slider}>
                        <Slider {...settings} >
                            {quizzes.map(quiz => (
                                <QuizCard
                                    key={quiz.id}
                                    id={quiz.id}
                                    quizName={quiz.name}
                                    numQuestions={quiz.numQuestions}
                                    quizOwner={quiz.ownerUsername}
                                    imageUrl={quiz.imageUrl}
                                />
                            ))}
                        </Slider>
                    </div>
                </div>
                <h1 className={styles.section2}>Your Flashcards</h1>
                <div className={styles.container2}>
                    <div className={styles.slider}>
                        <Slider {...settings} >
                            {flashcards.map(cards => (
                                <FlashcardsCard
                                    key={cards.id}
                                    id={cards.id}
                                    flashcardsName={cards.name}
                                    numCards={cards.flashcards.length}
                                    flashcardsOwner={cards.ownerUsername}
                                />
                            ))}
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