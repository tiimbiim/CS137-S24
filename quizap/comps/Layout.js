import LoginNavbar from "./LoginNavbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
    return ( 
        <div className="content">
            <main>{ children }</main>
        </div>
     );
}
 
export default Layout;