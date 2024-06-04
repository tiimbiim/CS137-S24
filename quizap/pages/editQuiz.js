import styles from "@/styles/editQuiz.module.css"
import Image from "next/image";
import { useState } from 'react';

const editQuiz = () => {
    const [questions, setQuestions] = useState([
        { id: 1, text: '', answers: ['', '', '', ''], imageUrl: '/noImage.png' }
    ]);

    const handleImageChange = (index, event) => {
        const file = event.target.files[0];
        if (file) {
            const newQuestions = [...questions];
            newQuestions[index].imageUrl = URL.createObjectURL(file);
            setQuestions(newQuestions);
        }
    };

    const handleDeleteImage = (index) => {
        const newQuestions = [...questions];
        newQuestions[index].imageUrl = '/noImage.png';
        setQuestions(newQuestions);
    };

    const handleAddQuestion = () => {
        const newQuestions = [...questions];
        const newIndex = newQuestions[newQuestions.length - 1].id + 1;
        newQuestions.push({ id: newIndex, text: '', answers: ['', '', '', ''], imageUrl: '/noImage.png' });
        setQuestions(newQuestions);
    };

    const handleDeleteQuestion = (index) => {
        if (questions.length === 1) {
            return;
        }
        const newQuestions = [...questions];
        newQuestions.splice(index, 1);
        setQuestions(newQuestions);
    };

    const handleQuestionChange = (index, event) => {
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
                            <input
                                className={styles.input}
                                type="text"
                                placeholder={`QUESTION #${index + 1}`}
                                value={question.text}
                                onChange={(e) => handleQuestionChange(index, e)}
                            />
                            {index !== 0 && (
                                <button onClick={() => handleDeleteQuestion(index)}>
                                    <img src="delete.png" alt="Delete" height="35px" width="30px" />
                                </button>
                            )}
                        </div>

                        <div className={styles.style}>
                            <Image src={question.imageUrl} id="pic" width={170} height={170} alt="Question Image" />
                            <div className={styles.inputContainer2}>
                                <label className={styles.label} htmlFor={`input-file-${index}`}>Edit Image</label>
                                <input
                                    className={styles.imageInput}
                                    type="file"
                                    accept="image/jpeg, image/png, image/jpg"
                                    id={`input-file-${index}`}
                                    onChange={(e) => handleImageChange(index, e)}
                                />
                                <button onClick={() => handleDeleteImage(index)}>
                                    <img src="delete.png" alt="Delete" height="25px" width="20px" />
                                </button>
                            </div>
                        </div>

                        <div className={styles.inputContainer}>
                            {question.answers.map((answer, answerIndex) => (
                                <input
                                    key={answerIndex}
                                    className={styles.answerInput}
                                    type="text"
                                    placeholder={`ANSWER #${answerIndex + 1}`}
                                    value={answer}
                                    onChange={(e) => handleAnswerChange(index, answerIndex, e)}
                                />
                            ))}
                        </div>
                    </div>
                ))}

                <div className="wrap">
                    <button className={styles.button2} onClick={handleAddQuestion}>New Question</button>
                </div>
                <div className={styles.buttonContainer}>
                    <a href="mainPage"><div className="wrap"><button className={styles.button}>Create Quiz</button></div></a>
                    <a href="selectAnswer"><div className="wrap"><button className={styles.button}>Host Quiz</button></div></a>
                    <a href="createQuiz"><div><button className={styles.button}>Cancel</button></div></a>
                </div>
            </div>
        </main>
    );
}


export default editQuiz;