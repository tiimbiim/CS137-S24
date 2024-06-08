import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase.config"
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "@/styles/login.module.css"
import Link from 'next/link';

const  login = () => {

    const router = useRouter();
    const [isAuthenticated, setIsAuthenticated] = useState(false);
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

        if(type == 'signin') {

            signInWithEmailAndPassword(auth, email, password).then(data=> {
                console.log(data, "authData");
                setIsAuthenticated(true);
                router.push("/mainPage");

            }).catch(err => {
                alert(err.code)
            })


        }
        else {
            console.log('YOU ARE DOING SOMETHING WRONG')
        }

    }

    return ( 
        <main className={styles.main}>
            <Link href="/" className={styles.homeButton}>Back to Home</Link>
            <div className={styles.body}>
                <h1 className={styles.h1}>QuiZap</h1>
                <h2 className={styles.h1}>Log In</h2>
                <form onSubmit={(e)=>handleSubmit(e, 'signin')} action="">
                    <label for="first" className={styles.label}>
                        Email:
                    </label>
                    <input className={styles.input} id ="email" name="email" placeholder="Enter your email" required></input>
                    <label for="password" className={styles.label}>
                        Password:
                    </label>
                    <input className={styles.input} type="password" id="password" name="password" placeholder="Enter your password" required></input>
                    <a className={styles.password} href="#">Forgot your password?</a>
                    
                    <div class="wrap">
                        <button className={styles.button}>
                            Log In
                        </button>
                    </div>
                </form>
                <a className={styles.a} href="createAccount">Create an account</a>
                <a className={styles.a} href="joinQuiz">Sign in as guest</a>
            </div>
        </main>
);
}
 
export default login ;