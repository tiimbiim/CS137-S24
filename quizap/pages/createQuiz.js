import styles from "@/styles/createQuiz.module.css"
import Image from "next/image";
import { useState } from 'react';
import { db, storage, auth } from '../firebase.config'
import { doc, setDoc, collection } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL} from 'firebase/storage'
import { useRouter } from "next/router";
import { v4 as uuidv4 } from 'uuid'

const createQuiz = () => {

    const [imageUrl, setImageUrl] = useState('/noImage.png');
    const [imageFile, setImageFile] = useState(null); // Store the file to be uploaded
    const [quizName, setQuizName] = useState('');
    const router = useRouter();

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        setImageUrl(URL.createObjectURL(file));
        setImageFile(file);
    };
    const handleCancelClick = () => {
        router.push('/library');
    };

    const handleSubmit = async () => {

        const user = auth.currentUser;

        if(user) {

            const randomChars = Math.random().toString(36).substring(7);

            const quizId = `${quizName}_${randomChars}`

            const quizDocRef = doc(db, "quizzes", quizId);
            let imageURL = '';

            if(imageFile) {

                const storageRef = ref(storage, `quizImages/${user.uid}/${quizName}/${imageFile.name}`)
                await uploadBytes(storageRef, imageFile);
                imageURL = await getDownloadURL(storageRef);


            }
            try {
                await setDoc(quizDocRef, {
                    name: quizName,
                    owner: user.uid,
                    questions: [],
                    numQuestions: 0
                });
            }
            catch{
                alert("There was an error creating your quiz!");
            }
            router.push(`/editQuiz/${quizId}`);

        }
        else {

            console.log("User is not authenticated");

        }

    }

    return ( 
    
        <main className={styles.main}>
            <div className={styles.body}>
                <h1 className={styles.h1}>Make a New Quiz!</h1>
                <input className={styles.input} type="text" id ="first" name="first" placeholder="NAME" value={quizName} onChange={(e)=>setQuizName(e.target.value)} required></input>
                <div className={styles.style}>
                    <Image src={imageUrl} id= "pic" width={170} height={170}/>
                    <label className={styles.label} for="input-file">Edit</label>
                    <input className={styles.imageInput} type="file" accept="image/jpeg, image/png, image/jpg" id="input-file" onChange={handleImageChange}></input>
                </div>
                <div class="flex-container">
                    <div><a><div><button className={styles.button} onClick={handleSubmit}>Create Quiz</button></div></a></div>
                    <div><a><div><button onClick={handleCancelClick}>Cancel</button></div></a></div>
                </div>
            </div>
        </main> 
    );
}

export default createQuiz;