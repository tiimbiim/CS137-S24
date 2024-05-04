import styles from "@/styles/schedule.module.css"

const schedule = () => {
    return ( <main className={styles.main}>
        <h1 className={styles.h1}>Notifications:</h1>
        <input className={styles.body} placeholder="dd/mm/yyyy"></input>
        <div class="wrap"><button className={styles.button} onclick="solve()">Save</button></div>
    </main> );
}

export default schedule;