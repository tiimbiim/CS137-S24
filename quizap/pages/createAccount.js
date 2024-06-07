import styles from "@/styles/login.module.css"
import { auth, db } from "../firebase.config"
import { onAuthStateChanged, createUserWithEmailAndPassword } from 'firebase/auth'
import { addDoc, setDoc, doc } from "firebase/firestore"
import {useState } from 'react'
import { useRouter } from "next/router"

const createAccount = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const router = useRouter();

    onAuthStateChanged(auth, (user) => {

        if(user) {

            const uid = user.uid;
            console.log(uid, 'has logged in');
            router.push("/mainPage");

        }
        else {

            console.log('NO ONE IS LOGGED IN RIGHT NOW');

        }

    })

    const handleSubmit = (e, type) => {
        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;

        const username = email.split('@')[0];

        if(type == 'signup') {

            createUserWithEmailAndPassword(auth, email, password).then((data) => {
                console.log(data, "authData");
                setIsAuthenticated(true);

                const docRef = doc(db, "users", data.user.uid);
                setDoc(docRef, {
    
                    email: email,
                    username: username,
                    points: 0
    
                })

                router.push("/mainPage");

            }).catch(err => {
                alert(err.code)
            })


        }
        else {
            console.log('YOU ARE DOING SOMETHING WRONG')
        }

    }

    return (  <main className={styles.main}>
        <div className={styles.body}>
            <h1 className={styles.h1}>QuiZap</h1>
            <h2 className={styles.h1}>Sign Up</h2>
            <form onSubmit={(e)=>handleSubmit(e, 'signup')}>
                <label for="first" className={styles.label}>
                    Email:
                </label>
                <input className={styles.input} name="email" placeholder="Enter your email" required></input>
                <label for="password" className={styles.label}>
                    Password:
                </label>
                <input className={styles.input} type="password" id="password" name="password" placeholder="Enter your password" required></input>
                
                <div class="wrap">
                    <button className={styles.button}>
                        Create Account
                    </button>
                </div>
            </form>
            <a className={styles.a} href="login">Log in</a>
            <a className={styles.a}href="joinQuiz">Sign in as guest</a>
        </div>
    </main> );
}
 
export default createAccount;