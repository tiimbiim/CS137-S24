import React from 'react';
import styles from '@/styles/legalAndPrivacy.module.css';

const legalAndPrivacy = () => {
    return (
        <div className={styles.container}> 
            <h1 className={styles.heading}>Legal and Privacy</h1> 
            <section className={styles.section}> 
                <h2 className={styles.subHeading}>Terms of Service</h2>
                <p className={styles.paragraph}>By accessing and using QuiZap, you agree to abide by these terms and conditions. Please read them carefully.</p> 
                <p className={styles.paragraph}>1. Use of the Service: You must use the Service in accordance with all applicable laws and regulations.</p> 
                <p className={styles.paragraph}>2. User Conduct: You are responsible for your conduct while using the Service. Do not engage in any illegal or harmful activities.</p> 
                <p className={styles.paragraph}>3. Intellectual Property: All content and materials provided through the Service are the property of QuiZap or its licensors.</p>
            </section>
            <section className={styles.section}> 
                <h2 className={styles.subHeading}>Privacy Policy</h2> 
                <p className={styles.paragraph}>Our Privacy Policy outlines how we collect, use, and protect your personal information. Here are some key points:</p> 
                <ul className={styles.list}> 
                    <li>We collect personal information when you sign up for an account, use our services, or interact with us.</li>
                    <li>We use your information to provide and improve our services, personalize your experience, and communicate with you.</li>
                    <li>We may share your information with trusted third parties for specific purposes, such as providing customer support.</li>
                    <li>We take measures to safeguard your information and protect it from unauthorized access or disclosure.</li>
                </ul>
            </section>
            <section className={styles.section}> 
                <h2 className={styles.subHeading}>Cookie Policy</h2> 
                <p className={styles.paragraph}>Our Cookie Policy explains how we use cookies and similar technologies to enhance your browsing experience and analyze website traffic.</p>
                <p className={styles.paragraph}>Cookies are small text files that are stored on your device when you visit a website. They help us remember your preferences, track usage patterns, and improve our services.</p>
                <p className={styles.paragraph}>By using our website, you consent to the use of cookies as described in our Cookie Policy.</p> 
            </section>
        </div>
    );
}

export default legalAndPrivacy;