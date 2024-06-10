import styles from "@/styles/stats.module.css"
import { collection, query, orderBy, limit, getDocs, doc, getDoc } from "firebase/firestore";
import { db, auth } from "../firebase.config"
import { useEffect, useState } from "react";
import Link from "next/link";

const stats = () => {

    const [userPoints, setUserPoints] = useState(null);
    const [userRank, setUserRank] = useState(null);
    const [topUsers, setTopUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [username, setUsername] = useState(null);

    useEffect(() => {

        const fetchLeaderboard = async () => {

            try {

                const user = auth.currentUser;
                if (!user) return;

                const usersRef = collection(db, "users");
                const topUsersQuery = query(usersRef, orderBy("points", "desc"));
                const querySnapshot = await getDocs(topUsersQuery);

                const usersData = querySnapshot.docs.map(doc => ({

                    id: doc.id,
                    ...doc.data()

                }));

                const bigThree = usersData.slice(0,3);
                setTopUsers(bigThree);

                const currentUserDoc = await getDoc(doc(db, "users", user.uid));
                const currentUserPoints = currentUserDoc.exists() ? currentUserDoc.data().points : 0;
                const currentUserName = currentUserDoc.exists() ? currentUserDoc.data().username : "";
                setUserPoints(currentUserPoints);
                setUsername(currentUserName);


                const rank = usersData.findIndex(userData => userData.id === user.uid) + 1;
                setUserRank(rank);

            }        
            catch (error) {

                console.error("Error fetching leaderboard: ", error);
            
            } 
            finally {

                setLoading(false);
            }

        };

        fetchLeaderboard();

    }, []);

    return ( <main className={styles.main}>
        <div className={styles.body}>
            <Link href="/mainPage" className={styles.homeButton}>Back to Home</Link>
            <h1 className={styles.h1}>Leaderboard (points)</h1>
                {topUsers.map((user, index) => (
                    <div key={user.id} className={styles.userCard}>
                        <h3>{index + 1}. {user.username}: {user.points}</h3>
                    </div>
                ))}
                <br />
                <h2>{username}, you are</h2>
                <p>rank {userRank} with {userPoints} points</p>
        </div>
    </main> );
}

export default stats;