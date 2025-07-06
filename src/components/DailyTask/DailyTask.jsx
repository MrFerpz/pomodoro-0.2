import styles from "./DailyTask.module.css"

export default function DailyTask({task}) {
    return (
        <div>
            <div className={styles.taskCard}>
                <p className={styles.taskText}>{task}</p>
            </div>
        </div>
    )
}