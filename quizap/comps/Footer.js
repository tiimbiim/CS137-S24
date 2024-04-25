import styles from "@/styles/Home.module.css";

const sectionStyle = {
    display: 'inline-block',
    verticalAlign: 'top',
    textAlign: 'center',
    marginBottom: '40px',
};
const listStyle = {
    listStyle: 'none',
    textAlign: 'left',
}
const textStyle = {
    marginBottom: '10px',
}

const Footer = () => {
    return ( 
        <footer className={styles.footerStyle}>
            <div style={sectionStyle}>
                <h2>About</h2>
                <ul style={listStyle}>
                    <li style={textStyle}><a>How QuiZap works</a></li>
                    <li style={textStyle}><a>Meet the team</a></li>
                    <li style={textStyle}><a>Contact us</a></li>
                </ul>
            </div>
            <div style={sectionStyle}>
                <h2>Help Center</h2>
                <ul style={listStyle}>
                    <li style={textStyle}><a>FAQ</a></li>
                    <li style={textStyle}><a>Community Forums</a></li>
                    <li style={textStyle}><a>Report Issues</a></li>
                    <li style={textStyle}><a>Legal & Privacy</a></li>
                </ul>
            </div>
            <p>Copyright 2024 QuiZap</p>
        </footer>
     );
}
 
export default Footer;