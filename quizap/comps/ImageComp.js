import Image from "next/image";
import styles from "@/styles/imageComp.module.css";

const ImageComp = () => {
    return ( 
        <div className={styles.imageCompStyle}>
            <Image src="/1125678.png" width={1280} height={1080} className={styles.imageStyle} alt="Background Image"/>
            <div className={styles.contentStyle}>
                <h1 className={styles.headingStyle}>THE DAWN OF A NEW WAY TO STUDY</h1>
                <p className={styles.paragraphStyle}>QuiZap is the newest innovative studying platform, where learning meets engagement. 
                With our user-friendly interface and diverse study tools, learners can tailor their educational journey, 
                whether it’s through lively quiz competitions or focused flashcard review sessions. Join us in revolutionizing 
                the way students study and succeed!</p>
                <a href="/createAccount"><button className={styles.signUpButton}>Sign Up Now</button></a>
            </div>
        </div>
     );
}
 
export default ImageComp;