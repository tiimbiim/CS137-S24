import styles from "@/styles/editQuiz.module.css"
import Image from "next/image";
import { useState } from 'react';

const editQuiz = () => {
    const [imageUrl, setImageUrl] = useState('/noImage.png');
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImageUrl(URL.createObjectURL(file));
      };
    return ( <main className={styles.main}>
        <div className={styles.body}>
            <h1 className={styles.h1}>Quiz Settings</h1>
            <h6 className={styles.h6}>ID:987654321</h6>
            <div className={styles.inputContainer}>
                <input className={styles.input} type="text" id ="first" name="first" placeholder="QUESTION#1" required></input>
                <form Name="" Method="" Action="">
                    <input Name="IB1" type="image" src="delete.png" height="35px" width="30px"></input>
                </form>
            </div>
            <div className={styles.style}><Image src={imageUrl} id= "pic" width={170} height={170}/>
                <div className={styles.inputContainer2}>
                    <label className={styles.label} for="input-file">Edit Image</label>
                    <input className={styles.imageInput} type="file" accept="image/jepg, image/png, image/jpg" id="input-file" onChange={handleImageChange}></input>
                    <form Name="" Method="" Action="">
                        <input Name="IB1" type="image" src="delete.png" height="25px" width="20px"></input>
                    </form>
                </div>
            </div>
            <div className={styles.inputContainer}>
                <input className={styles.answerInput} type="text" id ="first" name="first" placeholder="ANSWER#1"></input>
                <input className={styles.answerInput} type="text" id ="first" name="first" placeholder="ANSWER#2"></input>
                <input className={styles.answerInput} type="text" id ="first" name="first" placeholder="ANSWER#3"></input>
                <input className={styles.answerInput} type="text" id ="first" name="first" placeholder="ANSWER#4"></input>
            </div>
            <div class="wrap"><button className={styles.button2} type="submit" onclick="solve()">New Question</button></div>
            <div class="wrap"><button className={styles.button} type="submit" onclick="solve()">Create Quiz</button></div>
        </div>
    </main> );
}

export default editQuiz;