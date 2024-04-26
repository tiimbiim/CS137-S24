
const  login = () => {
    return ( 

        <div className="main">
            <h1>Log In</h1>
            <h3>Enter your login credentials</h3>
            <form action="">
                <label for="first">
                    Email:
                </label>
                <input type="text" id ="first" name="first" placeholder="Enter your email" required></input>
                <label for="password">
                    Password:
                </label>
                <input type="password" id="password" name="password" placeholder="Enter your password" required></input>
                
                <div class="wrap">
                    <button type="submit" onclick="solve()">
                        Log in
                    </button>
                </div>
            </form>
            <a href="#">Create an account</a>
            <a href="#">Sign in as guest</a>
        </div>

);
}
 
export default login ;