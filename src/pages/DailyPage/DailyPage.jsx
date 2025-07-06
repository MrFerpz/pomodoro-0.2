import styles from "./DailyPage.module.css"
import DailyTask from "../../components/DailyTask/DailyTask"

export default function DailyPage({coins, updateCoins}) {
    return (
        <div>
            <div className={styles.title}>Daily Habits</div>
            <div className={styles.coinsText}>You currently have {coins} coins</div>
            <div className={styles.dailyGrid}>
                <DailyTask task={"Exercise"} updateCoins={updateCoins}/>
                <DailyTask task={"Meditate"} updateCoins={updateCoins}/>
                <DailyTask task={"French"} updateCoins={updateCoins}/>
            </div>
        </div>
    )
}