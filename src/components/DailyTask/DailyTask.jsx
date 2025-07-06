import styles from "./DailyTask.module.css"

export default function DailyTask({task, updateCoins}) {
    function handleClick() {
        updateCoins(prev => prev + 10)
    }

    return (
        <div onClick={handleClick}>
            <div className={styles.taskCard}>
                <p className={styles.taskText}>{task}</p>
            </div>
        </div>
    )
}