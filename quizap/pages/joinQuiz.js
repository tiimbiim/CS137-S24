import styles from "@/styles/joinQuiz.module.css"

const joinQuiz = () => {
    return ( <main className={styles.main}>
        <input className={styles.body} placeholder="Enter Code..."></input>
        <div>
            <a href="#">
                <div class="wrap"><button className={styles.button} onclick="solve()">Join</button></div>
            </a>
        </div>
    </main> );
}

export default joinQuiz;