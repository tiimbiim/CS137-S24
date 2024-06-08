import styles from "@/styles/editQuiz.module.css"
import Image from "next/image";
import { useState } from 'react';

const questionTypes = ['Multiple Choice', 'True/False'];

const editQuiz = () => {
    const [questions, setQuestions] = useState([
        { id: 1, text: '', answers: ['', '', '', ''], correctAnswers: [false, false, false, false], imageUrl: '/noImage.png', type: questionTypes[0] }
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
        newQuestions.push({ id: newIndex, text: '', answers: ['', '', '', ''], correctAnswers: [false, false, false, false], imageUrl: '/noImage.png', type: questionTypes[0] });
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

    const handleCorrectAnswerChange = (questionIndex, answerIndex, event) => {
        const newQuestions = [...questions];
        newQuestions[questionIndex].correctAnswers[answerIndex] = event.target.checked;
        setQuestions(newQuestions);
    };

    const handleTypeChange = (index, event) => {
        const newQuestions = [...questions];
        newQuestions[index].type = event.target.value;
        if (event.target.value === 'True/False') {
            newQuestions[index].answers = ['True', 'False'];
            newQuestions[index].correctAnswers = [false, false];
        } else {
            newQuestions[index].answers = ['', '', '', ''];
            newQuestions[index].correctAnswers = [false, false, false, false];
        }
        setQuestions(newQuestions);
    };

    const handleTrueFalseChange = (questionIndex, value) => {
        const newQuestions = [...questions];
        newQuestions[questionIndex].answers = [value];
        newQuestions[questionIndex].correctAnswers = [value === 'True', value === 'False'];
        setQuestions(newQuestions);
    };

    return (
        <main className={styles.main}>
            <div className={styles.body}>
                <h1 className={styles.h1}>Quiz Settings</h1>
                <h6 className={styles.h6}>ID:987654321</h6>

                {questions.map((question, index) => (
                    <div key={question.id}>

                        <div className={styles.questionTypeContainer}>
                            <select
                                id={`question-type-${index}`}
                                value={question.type}
                                onChange={(e) => handleTypeChange(index, e)}
                                className={styles.select}
                            >
                                {questionTypes.map((type, typeIndex) => (
                                    <option key={typeIndex} value={type}>
                                        {type}
                                    </option>
                                ))}
                            </select>
                        </div>

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
                            {question.type === 'True/False' ? (
                                <div>
                                    <button
                                        className={`${styles.trueFalseButton} ${question.answers[0] === 'True' ? styles.selected : ''}`}
                                        onClick={() => handleTrueFalseChange(index, 'True')}
                                    >
                                        True
                                    </button>
                                    <button
                                        className={`${styles.trueFalseButton} ${question.answers[0] === 'False' ? styles.selected : ''}`}
                                        onClick={() => handleTrueFalseChange(index, 'False')}
                                    >
                                        False
                                    </button>
                                </div>
                            ) : (
                                question.answers.map((answer, answerIndex) => (
                                    <div key={answerIndex} className={styles.answerContainer}>
                                        <input
                                            className={styles.answerInput}
                                            type="text"
                                            placeholder={`ANSWER #${answerIndex + 1}`}
                                            value={answer}
                                            onChange={(e) => handleAnswerChange(index, answerIndex, e)}
                                        />
                                        <input
                                            className={styles.checkbox}
                                            type="checkbox"
                                            checked={question.correctAnswers[answerIndex]}
                                            onChange={(e) => handleCorrectAnswerChange(index, answerIndex, e)}
                                        />
                                    </div>
                                ))
                            )}
                        </div>
                    </div>
                ))}

                <div className="wrap">
                    <button className={styles.button2} onClick={handleAddQuestion}>New Question</button>
                </div>
                <div className={styles.buttonContainer}>
                    <a href="library"><div className="wrap"><button className={styles.button}>Save Quiz</button></div></a>
                    <a href="selectAnswer"><div className="wrap"><button className={styles.button}>Host Quiz</button></div></a>
                    <a href="library"><div><button className={styles.button}>Cancel</button></div></a>
                </div>
            </div>
        </main>
    );
}

export default editQuiz;