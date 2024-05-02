
const LoginNavbar = () => {
    return ( 
        <nav>
            <div className="logo">
                <h1>QuiZap</h1>
            </div>
            <a href="login" style={{textDecoration: 'none'}}>Log In</a>
            <a href="createAccount" style={{textDecoration: 'none'}}>Sign Up</a>
        </nav>
     );
}
 
export default LoginNavbar;