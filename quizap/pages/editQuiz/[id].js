import styles from "@/styles/editQuiz.module.css"
import Image from "next/image";
import { useState } from 'react';
import { useRouter } from 'next/router';
import { doc, updateDoc, arrayUnion } from 'firebase/firestore';
import { db, storage } from '../../firebase.config'

const editQuiz = () => {
    const router = useRouter();
    const quizId  = router.query;

    console.log("quizId", `${quizId}`);

    const [imageUrl, setImageUrl] = useState('/noImage.png');
    const [questions, setQuestions] = useState([{ id: 1, text: '', answers: ['', '', '', ''] }]);
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImageUrl(URL.createObjectURL(file));
    };
    const handleDeleteImage = () => {
        setImageUrl('/noImage.png');
    };
    const handleAddQuestion = async () => {
        const newQuestions = [...questions];
        const newIndex = newQuestions[newQuestions.length - 1].id + 1;
        newQuestions.push({ id: newIndex, text: '', answers: ['', '', '', ''] });
        setQuestions(newQuestions);

    };
    const handleDeleteQuestion = (index) => {
        if (index === 0) {
            return;
        }
        const newQuestions = [...questions];
        newQuestions.splice(index, 1);
        setQuestions(newQuestions);

    };
    const handleQuestionChange = (index, event) => {
        const quizDocRef = doc(db, "quizzes", `${quizId}`);
        const newQuestions = [...questions];
        newQuestions[index].text = event.target.value;
        setQuestions(newQuestions);

    };
    const handleAnswerChange = (questionIndex, answerIndex, event) => {
        const newQuestions = [...questions];
        newQuestions[questionIndex].answers[answerIndex] = event.target.value;
        setQuestions(newQuestions);

    };

    

    return (
        <main className={styles.main}>
            <div className={styles.body}>
                <h1 className={styles.h1}>Quiz Settings</h1>
                <h6 className={styles.h6}>ID:987654321</h6>

                {questions.map((question, index) => (
                    <div key={question.id}>
                        <div className={styles.inputContainer}>
                            <input className={styles.input} type="text" placeholder={`QUESTION #${index + 1}`} value={question.text} onChange={(e) => handleQuestionChange(index, e)} />
                            {index !== 0 && (<form Name="" Method="" Action="">
                                <input Name="IB1" type="image" src="delete.png" height="35px" width="30px" onClick={() => {
                                    handleDeleteQuestion(index);
                                }} />
                            </form>)}
                        </div>

                        <div className={styles.style}>
                            <Image src={imageUrl} id="pic" width={170} height={170} />
                            <div className={styles.inputContainer2}>
                                <label className={styles.label} htmlFor="input-file">Edit Image</label>
                                <input className={styles.imageInput} type="file" accept="image/jepg, image/png, image/jpg" id="input-file" onChange={handleImageChange} />
                                <form Name="" Method="" Action="">
                                    <input Name="IB1" type="image" src="delete.png" height="25px" width="20px" onClick={handleDeleteImage} />
                                </form>
                            </div>
                        </div>

                        <div className={styles.inputContainer}>
                            {question.answers.map((answer, answerIndex) => (
                                <input key={answerIndex} className={styles.answerInput} type="text" placeholder={`ANSWER#${answerIndex + 1}`} value={answer} onChange={(e) => handleAnswerChange(index, answerIndex, e)} />
                            ))}
                        </div>
                    </div>
                ))}

                <div className="wrap">
                    <button className={styles.button2} onClick={handleAddQuestion}>New Question</button>
                </div>
                <div className={styles.buttonContainer}>
                    <a href="/mainPage"><div className="wrap"><button className={styles.button}>Create Quiz</button></div></a>
                    <a href="selectAnswer"><div className="wrap"><button className={styles.button}>Host Quiz</button></div></a>
                    <a href="createQuiz"><div><button className={styles.button}>Back</button></div></a>
                </div>
            </div>
        </main>
    );
}

export default editQuiz;