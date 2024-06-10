import styles from "@/styles/contactUs.module.css";
import { useRouter } from "next/router";

const contactUs = () => {
    const router = useRouter();
    const handleCancelClick = () => {
        router.back();
    };
    return (
        <div className={styles.container}>
            <h1>Contact Us</h1>
            <p>If you have any questions or feedback, feel free to reach out to us:</p>
            <div className={styles.contactInfo}>
                <p>Email: quizap@gmail.com</p>
            </div>
            <form className={styles.contactForm}>
                <h2>Send us a message</h2>
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Your Email" />
                <textarea placeholder="Your Message"></textarea>
                <button type="submit">Send</button>
            </form>
            <div className={styles.center}><button onClick={handleCancelClick}>Back</button></div>
        </div>
    );
}

export default contactUs;