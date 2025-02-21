import styles from "./SpinPage.module.css"
import { useState, useRef } from "react"
import { Stack, Button } from "@chakra-ui/react"

function SpinPage() {
    const [prizeList, setPrizeList] = [["10m break", "chess game", "walk", "croissant", "coffee", "early finish", "takeaway", "buy clothes"]]
    const [isSpinning, setIsSpinning] = useState(null)
    const [selectedPrize, setSelectedPrize] = useState(null)

    function handleSpin() {
        let randomNumber = Math.round(Math.random()*(prizeList.length-1))
        setSelectedPrize(prizeList[randomNumber]);
        setIsSpinning(true);
        // apply class after the duration of the animation
        // setTimeout(() => {}, 4000)
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
        </div>
    )
}

export default SpinPage