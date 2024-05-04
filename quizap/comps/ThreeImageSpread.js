import Image from "next/image";
import styles from "@/styles/threeImageSpread.module.css";


const ThreeImageSpread = () => {
    return ( 
        <div className={styles.rowStyle}>
            <div className={styles.columnStyle}>
                <Image src="/SUB12E.png" width={500} height={400}/>
                <div className={styles.textStyle}>
                    <h1 className={styles.headerStyle}>Create Quizzes</h1>
                    <p className={styles.paragraphStyle}>Make quizzes with your own custom questions in just a couple clicks</p>
                </div>
            </div>
            <div className={styles.columnStyle}>
                <Image src="/SUB25E.png" width={500} height={400}/>
                <div className={styles.textStyle}>
                    <h1 className={styles.headerStyle}>Invite Friends</h1>
                    <p className={styles.paragraphStyle}>Invite friends via a link to join your quiz</p>
                </div>
            </div>
            <div className={styles.columnStyle}>
                <Image src="/SUB26E.png" width={500} height={400}/>
                <div className={styles.textStyle}>
                    <h1 className={styles.headerStyle}>Share Results</h1>
                    <p className={styles.paragraphStyle}>Share your quiz results and show the rest of the world you're the smartest</p>
                </div>
            </div>
        </div>
     );
}
 
export default ThreeImageSpread;