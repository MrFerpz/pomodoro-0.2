import styles from "./Header.module.css"
import { Link } from "react-router-dom"

function Header({coins}) {
    
    return (
        <div className={styles.headerContainer}>
            <div className={styles.coinsIcon}><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="#FFD700"><path d="M12.0049 22.0027C6.48204 22.0027 2.00488 17.5256 2.00488 12.0027C2.00488 6.4799 6.48204 2.00275 12.0049 2.00275C17.5277 2.00275 22.0049 6.4799 22.0049 12.0027C22.0049 17.5256 17.5277 22.0027 12.0049 22.0027ZM12.0049 7.76011L7.76224 12.0027L12.0049 16.2454L16.2475 12.0027L12.0049 7.76011Z"></path></svg></div>
            <div className={styles.coinsText}>{coins}</div>
            <div className={styles.emptyGap}></div>
        </div>
    )
}

export default Header

