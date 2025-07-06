import styles from "./DailyPage.module.css"
import DailyTask from "../../components/DailyTask/DailyTask"

export default function DailyPage() {
    return (
        <div className={styles.dailyGrid}>
            <DailyTask task={"Exercise"}/>
            <DailyTask task={"Meditate"}/>
            <DailyTask task={"French"}/>
        </div>
    )
}