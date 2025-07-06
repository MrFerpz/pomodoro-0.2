import styles from "./DailyTask.module.css"

export default function DailyTask({task}) {
    return (
        <div className={styles.taskCard}>
            <p>{task}</p>
        </div>
    )
}