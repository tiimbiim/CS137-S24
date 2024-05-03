import styles from "@/styles/Home.module.css";
import Link from "next/link";

const sectionStyle = {
    display: 'inline-block',
    verticalAlign: 'top',
    textAlign: 'center',
    marginBottom: '20px',
};
const listStyle = {
    listStyle: 'none',
    textAlign: 'left',
}
const textStyle = {
    marginBottom: '15px',
}

const Footer = () => {
    return ( 
        <footer className={styles.footerStyle}>
            <div style={sectionStyle}>
                <h2>About</h2>
                <ul style={listStyle}>
                    <li style={textStyle}><Link href="/info/howItWorks">How QuiZap works</Link></li>
                    <li style={textStyle}><Link href="/info/aboutUs">Meet the team</Link></li>
                    <li style={textStyle}><Link href="/info/contactUs">Contact us</Link></li>
                </ul>
            </div>
            <div style={sectionStyle}>
                <h2>Help Center</h2>
                <ul style={listStyle}>
                    <li style={textStyle}><Link href="/info/FAQ">FAQ</Link></li>
                    <li style={textStyle}><Link href="/info/communityForums">Community Forums</Link></li>
                    <li style={textStyle}><Link href="/info/reportIssues">Report Issues</Link></li>
                    <li style={textStyle}><Link href="/info/legalAndPrivacy">Legal & Privacy</Link></li>
                </ul>
            </div>
            <p>Copyright © 2024 QuiZap</p>
        </footer>
     );
}
 
export default Footer;