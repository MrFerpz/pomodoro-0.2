import { Link } from "react-router"
import Icons from "../../components/Icons"
import styles from "./HomePage.module.css"

function HomePage() {
    return (
            <div className={styles.iconContainer}>
                <div className={styles.icon}><Link to="fight">{Icons.swords}</Link></div>
                <div className={styles.icon}><Link to="shop">{Icons.shop}</Link></div>
                <div className={styles.icon}><Link to="profile">{Icons.profile}</Link></div>
                <div className={styles.icon}><Link to="achievements">{Icons.achievements}</Link></div>
            </div>
    )
}

export default HomePage