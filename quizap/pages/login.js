import Footer from "@/comps/Footer";
import styles from "@/styles/login.module.css"

const  login = () => {
    return ( 
        <main className={styles.main}>
            <div className={styles.body}>
                <h1 className={styles.h1}>QuiZap</h1>
                <h2 className={styles.h1}>Log In</h2>
                <form action="">
                    <label for="first" className={styles.label}>
                        Email:
                    </label>
                    <input className={styles.input} type="text" id ="first" name="first" placeholder="Enter your email" required></input>
                    <label for="password" className={styles.label}>
                        Password:
                    </label>
                    <input className={styles.input} type="password" id="password" name="password" placeholder="Enter your password" required></input>
                    <a className={styles.password} href="#">Forgot your password?</a>
                    
                    <div class="wrap">
                        <button className={styles.button} type="submit" onClick="solve()">
                            Log In
                        </button>
                    </div>
                </form>
                <a className={styles.a} href="createAccount">Create an account</a>
                <a className={styles.a} href="joinQuiz">Sign in as guest</a>
            </div>
        </main>
);
}
 
export default login ;