import styles from "@/styles/joinQuiz.module.css";
import { useRouter } from 'next/router';

const joinQuiz = () => {
    const router = useRouter();
    const handleCancelClick = () => {
        router.push('/');
    };
    return ( <main className={styles.main}>
        <input className={styles.body} placeholder="Enter Code..."></input>
        <div className={styles.flexContainer}>
            <button className={styles.button} onclick="solve()">Join</button>
            <button className={styles.button} onClick={handleCancelClick}>Cancel</button>
        </div>
    </main> );
}

export default joinQuiz;