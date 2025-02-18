import styles from "./ShopPage.module.css"
import ShopItem from "../../components/ShopItem/ShopItem"

function ShopPage({coins}) {
    return (
        <div>
            <div>Your current balance: {coins}</div>
            <div className={styles.shopGrid}>
                <ShopItem title="5m break" value="10"/>
                <ShopItem title="10m break" value="15"/>
                <ShopItem title="Chess game" value="10"/>
                <ShopItem title="Walk" value="10"/>
                <ShopItem title="Croissant" value="30"/>
                <ShopItem title="Coffee" value="40"/>
                <ShopItem title="Early finish" value="80"/>
                <ShopItem title="Takeaway" value="100"/>
                <ShopItem title="New piece of clothing" value="200"/>
            </div>
        </div>
    )
}

export default ShopPage