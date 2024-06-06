import { useEffect, useState } from 'react';
import { onAuthStateChanged, signOut } from 'firebase/auth';
import { doc, getDoc } from 'firebase/firestore';
import { db, auth } from '../firebase.config';  // Ensure you import your Firestore config
import styles from '../styles/mainNavbar.module.css'
import { useRouter } from "next/router"

const MainNavbar = () => {

    const [firstLetter, setFirstLetter] = useState('');
    const [isDropdownVisible, setIsDropdownVisible] = useState(false);
    const router = useRouter();

    useEffect(() => {

        onAuthStateChanged(auth, async (user) => {

            if(user) {
                const userDocRef = doc(db, "users", user.uid);
                const userDoc = await getDoc(userDocRef);

                if(userDoc.exists()) {

                    const userData = userDoc.data();
                    const username = userData.username;

                    if(username) {

                        setFirstLetter(username.charAt(0).toUpperCase());

                    }

                }
                else {
                    console.log("no such document");
                }
            }
            else {

                console.log("No user is logged in");

            }

        });

    }, []);

    const toggleDropdown = () => {
        setIsDropdownVisible(!isDropdownVisible);
    };

    const handleLogout = async () => {

        try {
            await signOut(auth);
            console.log('User has logged out');
            router.push('/');
            
        }
        catch{
            console.error("Error signing out: ", error);
        }

    }

    return ( 
        <nav>
            <div className="logo">
                <h1>QuiZap</h1>
            </div>
            {/* <a href="#" className={styles.logo}> {firstLetter ? `${firstLetter}` : 'Loading...'}</a> */}
            {firstLetter ? (
                <div>
                    <div className={styles.logo} onClick={toggleDropdown}>{firstLetter}</div>
                    {isDropdownVisible && (
                        <div className={styles.dropdownMenu}>
                            <ul>
                                <li onClick={handleLogout}>Logout</li>
                            </ul>
                        </div>
                    )}
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </nav>
     );
}
 
export default MainNavbar;