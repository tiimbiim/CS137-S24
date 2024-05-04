import styles from "@/styles/selectAnswer.module.css"

const selectAnswer = () => {
    return ( <main className={styles.main}>
        <div className={styles.body}>
            <h1 className={styles.h1}>What is the largest animal on Earth?</h1>
        </div>
        <div className={styles.inputContainer}>
            <button className={styles.button} onclick="solve()">Choice1</button>
            <button className={styles.button} onclick="solve()">Choice2</button>
        </div>
        <div className={styles.inputContainer}>
            <button className={styles.button} onclick="solve()">Choice3</button>
            <button className={styles.button} onclick="solve()">Choice4</button>
        </div>
    </main> );
}

export default selectAnswer;