import styles from "./DailyPage.module.css"
import DailyTask from "../../components/DailyTask/DailyTask"

export default function DailyPage() {
    return (
        <div>
            <div className={styles.title}>Daily Habits</div>
            <div className={styles.dailyGrid}>
                <DailyTask task={"Exercise"}/>
                <DailyTask task={"Meditate"}/>
                <DailyTask task={"French"}/>
            </div>
        </div>
    )
}