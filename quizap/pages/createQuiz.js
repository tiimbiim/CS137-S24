import styles from "@/styles/createQuiz.module.css"
import Image from "next/image";
import { useState } from 'react';

const createQuiz = () => {
    const [imageUrl, setImageUrl] = useState('/noImage.png');
    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImageUrl(URL.createObjectURL(file));
      };

    return ( <main className={styles.main}>
        <div className={styles.body}>
            <h1 className={styles.h1}>Make a New Quiz!</h1>
            <input className={styles.input} type="text" id ="first" name="first" placeholder="NAME" required></input>
            <div className={styles.style}><Image src={imageUrl} id= "pic" width={170} height={170}/>
                <label className={styles.label} for="input-file">Edit</label>
                <input className={styles.imageInput} type="file" accept="image/jepg, image/png, image/jpg" id="input-file" onChange={handleImageChange}></input>
            </div>
            <div class="flex-container">
                <div><a href="editQuiz"><div><button className={styles.button} onclick="solve()">Create Quiz</button></div></a></div>
                <div><a href="library"><div><button>Back</button></div></a></div>
            </div>
        </div>
    </main> );
}

export default createQuiz;