import styles from "./SpinPage.module.css"
import { useState, useRef } from "react"
import { Stack, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"
import Icons from "../../components/Icons"

function SpinPage() {
    const [prizeList, setPrizeList] = [["10m break", "Chess game", "Walk", "Croissant", "Coffee", "Early finish", "Takeaway", "Buy clothes"]]
    const [isSpinning, setIsSpinning] = useState(null)
    const [selectedPrize, setSelectedPrize] = useState(null)

    function handleSpin() {
        let randomNumber = Math.round(Math.random()*(prizeList.length-1))
        setSelectedPrize(prizeList[randomNumber]);
        setIsSpinning(true);
        setTimeout(() => {setIsSpinning(false)}, 3000)
    }

    return (
        <div>
            <div className={styles.horizontalFlexContainer}>
            <Button onClick={handleSpin} colorPalette="teal" className={styles.spinButton}>Spin!</Button>
            <Stack>
                {prizeList.map((prize, index) => {
                    return <div 
                    className={`${styles.box} ${isSpinning ? styles.animatedBox : ''} ${prize === selectedPrize ? styles.selectedBox : ''}`}
                    key={index}>
                        {prize}
                    </div>
                })}
            </Stack>
            </div>
            <div className={styles.homeButton}><Link to="/">{Icons.home}</Link></div>
            <div className={styles.shopButton}><Link to="../shop">{Icons.shop}</Link></div>
        </div>
    )
}

export default SpinPage