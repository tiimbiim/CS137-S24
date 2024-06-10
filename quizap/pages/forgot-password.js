import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../firebase.config"
import { useRouter } from "next/router";
import { useState } from "react";
import styles from "@/styles/login.module.css"
import Link from 'next/link';

const ForgotPassword = () => {

    const router = useRouter();


    const handleSubmit = (e, type) => {
        e.preventDefault()
        const email = e.target.email.value;

        if(type == 'signin') {

            sendPasswordResetEmail(auth, email).then(data=> {
                alert("Email sent!");
                router.push("/login");
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
                <h2 className={styles.h1}>Reset Password</h2>
                <form onSubmit={(e)=>handleSubmit(e, 'signin')} action="">
                    <label for="first" className={styles.label}>
                        Email:
                    </label>
                    <input className={styles.input} id ="email" name="email" placeholder="Enter your email" required></input>
                    
                    <div class="wrap">
                        <button className={styles.button}>
                            Send Password Reset Email
                        </button>
                    </div>
                </form>
                <a className={styles.a} href="/login">Back</a>
            </div>
        </main>
);
}
 
export default ForgotPassword;