import { Link } from "react-router-dom"
import styles from "./ProfilePage.module.css"
import Icons from "../components/Icons"

function ProfilePage({stats}) {

    function calcTotal({stats}) {
        let a = 0;
        for (let i = 0; i++; i < stats.sessionRecord.length) {
            a += stats.sessionRecord[i]
        }
        return a
    }

    function calcAverage({stats}) {
        let a = 0;

        if (stats.sessionRecord) {
        for (let i = 0; i++; i < stats.sessionRecord.length) {
            a += stats.sessionRecord[i]
        } 

        if (a !== null || undefined || 0) {
        return (
            a / stats.sessionRecord.length
        )}}
        else return "Complete a session to get your average!"
    }


    return (
        <div>
            <div className={styles.statsGrid}>
            <div className={styles.stat}>
                <div><b>TOTAL SESSIONS DONE</b></div>
                <div>{stats.completions}</div>
            </div>
            <div className={styles.stat}>
                <div><b>TOTAL TIME WORKING</b></div>
                <div>{calcTotal({stats})}</div>
            </div>
            <div className={styles.stat}>
                <div><b>AVERAGE SESSION LENGTH</b></div>
                <div>{calcAverage({stats})}</div>
            </div>
            <div className={styles.stat}>
                <div><b>TOTAL COINS EARNED</b></div>
                <div>{stats.totalCoinsEarned}</div>
            </div>
            <div className={styles.homeButton}><Link to="/">{Icons.home}</Link></div>
            </div>
        </div>
    )
}

export default ProfilePage