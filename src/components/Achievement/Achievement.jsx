import styles from "./Achievement.module.css"
import Icons from "../../components/Icons"

function Achievement() {
    return (
        <div className={styles.achievementObject}>
            <div>{Icons.trophy}</div>
        </div>
    )
}

export default Achievement