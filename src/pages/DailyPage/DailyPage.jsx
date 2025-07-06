import styles from "./DailyPage.module.css"
import DailyTask from "../../components/DailyTask/DailyTask"
import { Link } from "react-router"
import Icons from "../../components/Icons"

export default function DailyPage({coins, updateCoins}) {
    return (
        <div>
            <div className={styles.flexContainer}><Link to="/"><div className={styles.icon}>{Icons.home}</div></Link></div>
            <div className={styles.title}>Daily Habits</div>
            <div className={styles.dailyGrid}>
                <DailyTask task={"Exercise"} updateCoins={updateCoins}/>
                <DailyTask task={"Meditate"} updateCoins={updateCoins}/>
                <DailyTask task={"French"} updateCoins={updateCoins}/>
            </div>
        </div>
    )
}