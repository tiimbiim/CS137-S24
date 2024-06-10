import styles from "@/styles/discover.module.css"
import MainNavbar from "@/comps/MainNavbar";
import SideBar from "@/comps/SideBar";
import Footer from "@/comps/Footer";
import Slider from "react-slick";
import Image from "next/image";
import React, { useState, useEffect } from 'react';
import QuizCard from "@/comps/QuizCard";
import FlashcardsCard from "@/comps/FlashcardsCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { db, storage, auth } from '../firebase.config'
import { collection, getDocs, doc, getDoc, where, query } from "firebase/firestore";
import { getDownloadURL, ref, listAll } from "firebase/storage";
import { useRouter } from 'next/router';


const settings = {

    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,

};
const discover = () => {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState('quizzes');
    const [quizzes, setQuizzes] = useState([]);
    const [flashcards, setFlashcards] = useState([]);
    const [code, setCode] = useState('');

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleInputChange = (e) => {
        setCode(e.target.value);
    };

    useEffect(() => {
        const fetchQuizzes = async () => {
            const user = auth.currentUser;
            // return if user is not authenticated
            if (!user) { return; }
            // retrieve only the quizzes created by the current user
            const quizzesRef = collection(db, "quizzes");
            const userQuizzesQuery = query(quizzesRef, where("owner", "!=", user.uid));
            const querySnapshot = await getDocs(userQuizzesQuery);

            const quizzesData = await Promise.all(
                querySnapshot.docs.map(async (quizDoc) => {

                    const quizData = quizDoc.data();
                    const ownerDocRef = doc(db, "users", quizData.owner);
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
            const userFlashcardsQuery = query(flashcardsRef, where("owner", "!=", user.uid));
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

    const handleSearchClick = async () => {
        if (!code) {
            alert("Please enter ID before searching!");
            return;
        }
        let path;
        if (activeTab === 'quizzes') {
            path = `/quiz/${code}`;
        } else if (activeTab === 'flashcards') {
            path = `/flashcards/${code}`;
        }

        const docRef = doc(db, activeTab === 'quizzes' ? 'quizzes' : 'flashcards', code);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
            router.push(path);
        } else {
            alert(`${activeTab === 'quizzes' ? 'Quiz' : 'Flashcard'} with ID ${code} not found.`);
        }
    }

    return ( 
        <div>
            <MainNavbar />
            <div className={styles.main}>
                <h1 className={styles.headerStyle}>Discover</h1>
                <div className={styles.searchBarWrapper}>
                    <input placeholder="search by ID..." value={code} onChange={handleInputChange} className={styles.searchBar}/>
                    <button style={{ marginLeft: "10px" }} onClick={handleSearchClick}><img src={"search.png"} alt="Search" style={{ width: "24px", height: "24px" }}/></button>
                </div>
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
                    )}
                    {activeTab === 'flashcards' && (
                        <div className={styles.container}>
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
                    )}
                </div>
                <div className={styles.section}>
                    <h1 className={styles.sectionHeading}>Local</h1>
                    {activeTab === 'quizzes' && (
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
                    )}
                    {activeTab === 'flashcards' && (
                        <div className={styles.container}>
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
                    )}
                </div>
            </div>

            <SideBar/>
            <Footer />
            
        </div>
    );
}
 
export default discover;