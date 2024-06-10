import styles from "@/styles/howItWorks.module.css";
import { useRouter } from "next/router";

const howItWorks = () => {
    const router = useRouter();
    const handleCancelClick = () => {
        router.back();
    };
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>How QuiZap Works</h1>
            <div className={styles.step}>
                <h2 className={styles.stepHeading}>Step 1: Create an Account</h2>
                <p className={styles.stepDescription}>
                    If you already have your account registered, you can just login using
                    the login function on main page. If your not interested to create an
                    account, that's ok, login as guest is also an option.
                </p>
            </div>
            <div className={styles.step}>
                <h2 className={styles.stepHeading}>Step 2: Create Quizzes and Flashcards</h2>
                <p className={styles.stepDescription}>
                    After successfully loggin in, hover to the library side bar where you 
                    can create your own quizzes or flashcards based on your tabs. The quizzes/
                    flashcards you created will show up in library as well as the home page 
                    after you saved them. 
                </p>
            </div>
            <div className={styles.step}>
                <h2 className={styles.stepHeading}>Step 3: Play Quizzes and Study Flashcards</h2>
                <p className={styles.stepDescription}>
                    Clicking quizzes and flashcards on your home page will allow you to play 
                    the quiz or show your flashcards. You can also play them in library by 
                    pressing the play button for each individual one. 
                </p>
            </div>
            <div className={styles.step}>
                <h2 className={styles.stepHeading}>Step 4: Edit Quizzes and Study Flashcards</h2>
                <p className={styles.stepDescription}>
                    To keep track of your quizzes and flashcards, you simply click the 
                    quizzes/ flashcards you created in library. The page will lead you to edit page 
                    where you can save the change or delete the whole quiz/ flashcard. 
                </p>
            </div>
            <div className={styles.center}><button onClick={handleCancelClick}>Back</button></div>
        </div>
    );
};

export default howItWorks;