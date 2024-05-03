import styles from "@/styles/createFlashcard.module.css"

const createFlashcard = () => {
    return ( <main className={styles.main}>
        <div className={styles.body}>
            <h1 className={styles.h1}>Flashcards</h1>
            <h6 className={styles.h6}>ID:987654321</h6>
            <input className={styles.input} type="text" placeholder="NAME" required></input>
            <div className={styles.card}></div>
            <div class="wrap"><button className={styles.addButton} onclick="solve()">+</button></div>
            <a href="mainPage">
                <div class="wrap"><button className={styles.saveButton} onclick="solve()">Save</button></div>
            </a>
        </div>
    </main> );
}

export default createFlashcard;