import React from 'react';
import styles from "@/styles/reportIssues.module.css";
import { useRouter } from "next/router";

const reportIssues = () => {
    const router = useRouter();
    const handleCancelClick = () => {
        router.back();
    };
    return (
        <div className={styles.container}>
            <h1>Report Issues</h1>
            <p>If you encounter any issues while using QuiZap, please feel free to report them to us. Your feedback helps us improve our service!</p>
            <form>
                <label htmlFor="issue" className={styles.label}>Describe the Issue:</label>
                <textarea id="issue" name="issue" rows="4" cols="50" className={styles.textarea}></textarea>
                <button type="submit" className={styles.button}>Submit</button>
            </form>
            <div className={styles.center}><button onClick={handleCancelClick}>Back</button></div>
        </div>
    );
}

export default reportIssues;