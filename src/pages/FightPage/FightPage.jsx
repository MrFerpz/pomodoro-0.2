import Timer from "../../components/Timer/Timer"
import { Link } from "react-router-dom"
import Icons from "../../components/Icons"
import styles from "./FightPage.module.css"

function FightPage({updateCoins, coins}) {
    return (
        <div>
            <div className={styles.homeButton}><Link to="/">{Icons.home}</Link></div>
            <div className={styles.shopButton}><Link to="../shop">{Icons.shop}</Link></div>
            <div className={styles.focusUp}>Send Jenkins on a mission (focus up!)</div>
            <Timer updateCoins={updateCoins} coins={coins}/>
        </div>
    )
}

export default FightPage