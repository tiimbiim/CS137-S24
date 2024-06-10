import styles from "@/styles/aboutUs.module.css";
import { useEffect } from 'react';

const aboutUs = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.title}>Meet the QuiZap Team</h1>
            <section className={styles.section}>
                <h2 className={styles.subtitle}>Our Mission</h2>
                <p className={styles.text}>
                    At QuiZap, we believe in the power of interactive learning. Our mission is to provide educators and learners with the tools to create engaging and effective quizzes and flashcards. 
                    Whether you're a teacher looking to enhance your classroom experience or a student aiming to improve your study habits, QuiZap is here to help you succeed.
                </p>
            </section>
            <section className={styles.section}>
                <h2 className={styles.subtitle}>Our Story</h2>
                <p className={styles.text}>
                QuiZap was founded by a group of three UC Irvine students who studied the internet application engineering and saw a need for more dynamic and user-friendly educational tools. 
                This project is built from scratch, leveraging the knowledge we learned about front-end and back-end in class. We've applied javascript, html, css, and firebase, and published this app in 10 weeks.
                </p>
            </section>
            <section className={styles.section}>
                <h2 className={styles.subtitle}>The Team</h2>
                <div className={styles.teamGrid}>
                    <div className={styles.teamMember}>
                        <img src="/team/member1.jpg" alt="Member 1" className={styles.teamPhoto} />
                        <h3 className={styles.teamName}>Timothy Vu</h3>
                        <p className={styles.teamRole}>Co-Founder</p>
                        <p className={styles.teamBio}>
                        Over the course of Timothy's career, he gained a high reputation as an efficient lone-wolf assassin, having single-handedly broken organizations and made entire militia 
                        groups disappear. Timothy was also a test pilot in a top-secret UNSC project, the Sabre Program, which resulted in the development of the YSS-1000 "Sabre"-class starfighter.
                        </p>
                    </div>
                    <div className={styles.teamMember}>
                        <img src="/team/member2.jpg" alt="Member 2" className={styles.teamPhoto} />
                        <h3 className={styles.teamName}>Yu-Shin Chang</h3>
                        <p className={styles.teamRole}>Co-Founder</p>
                        <p className={styles.teamBio}>Also goes by Amber. She majors in software engineering and is committed to make QuiZap user-friendly and help students learn.</p>
                    </div>
                    <div className={styles.teamMember}>
                        <img src="/team/member3.jpg" alt="Member 3" className={styles.teamPhoto} />
                        <h3 className={styles.teamName}>Quamin Hua</h3>
                        <p className={styles.teamRole}>Co-Founder</p>
                        <p className={styles.teamBio}>blah blah blah.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default aboutUs;