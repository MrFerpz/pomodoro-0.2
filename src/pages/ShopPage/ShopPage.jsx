import styles from "./ShopPage.module.css"
import ShopItem from "../../components/ShopItem/ShopItem"
import { Link } from "react-router-dom"
import Icons from "../../components/Icons"

function ShopPage({coins, updateCoins}) {
    return (
        <div>
            <div className={styles.balance}>CURRENT BALANCE: {coins}</div>
            <div className={styles.separator}></div>
            <div className={styles.shopGrid}>
                <ShopItem title="5m break" value="10" iconRef="shortBreak" updateCoins={updateCoins}/>
                <ShopItem title="10m break" value="15" iconRef="longBreak" updateCoins={updateCoins}/>
                <ShopItem title="Chess game" value="10" iconRef="chess" updateCoins={updateCoins}/>
                <ShopItem title="Walk" value="10" iconRef="walk" updateCoins={updateCoins}/>
                <ShopItem title="Croissant" value="30" iconRef="croissant" updateCoins={updateCoins}/>
                <ShopItem title="Coffee" value="40" iconRef="coffee" updateCoins={updateCoins}/>
                <ShopItem title="Early finish" value="80" iconRef="earlyFinish" updateCoins={updateCoins}/>
                <ShopItem title="Takeaway" value="100" iconRef="takeaway" updateCoins={updateCoins}/>
                <ShopItem title="Buy clothes" value="200" iconRef="clothing" updateCoins={updateCoins}/>
            </div>
            <div className={styles.homeButton}><Link to="/">{Icons.home}</Link></div>
            <div className={styles.fightButton}><Link to="../fight">{Icons.swords}</Link></div>
        </div>
    )
}

export default ShopPage