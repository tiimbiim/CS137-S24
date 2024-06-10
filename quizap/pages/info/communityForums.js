import React from 'react';
import styles from "@/styles/communityForums.module.css";

const communityForums = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Community Forums</h1>
            <p className={styles.description}>Welcome to QuiZap Community Forums! Connect with other users, ask questions, share ideas, and participate in discussions.</p>
            <div className={styles.topic}>
                <h2 className={styles.topicTitle}>Topic Title</h2>
                <p className={styles.topicContent}>blah blah blah</p>
                <div className={styles.topicMeta}>
                    <span className={styles.author}>Posted by Admin</span>
                    <span className={styles.date}>Jun 9, 2024</span>
                </div>
            </div>
        </div>
    );
}

export default communityForums;