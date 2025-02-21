import styles from "./AchievementsPage.module.css"
import Achievement from "../../components/Achievement/Achievement"
import { Link } from "react-router-dom"
import Icons from "../../components/Icons"

function AchievementsPage() {
    return (
        <div>
            <div className={styles.homeButton}><Link to="/">{Icons.home}</Link></div>
        <div className={styles.achievementsGrid}>
            <Achievement/>
            <Achievement/>
            <Achievement/>
            <Achievement/>
            <Achievement/>
            <Achievement/>
            <Achievement/>
            <Achievement/>
            <Achievement/>
            <Achievement/>
            <Achievement/>
            <Achievement/>
            <Achievement/>
            <Achievement/>
            <Achievement/>
            <Achievement/>
            <Achievement/>
            <Achievement/>
            <Achievement/>
            <Achievement/>
            <Achievement/>
            <Achievement/>
            <Achievement/>
            <Achievement/>
            </div>
        </div>
    )
}

export default AchievementsPage