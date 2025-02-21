import styles from "./SpinPage.module.css"
import { useState } from "react"
import { Stack, Button } from "@chakra-ui/react"

function SpinPage() {
    const [prizeList, setPrizeList] = [["10m break", "chess game", "walk", "croissant", "coffee", "early finish", "takeaway", "buy clothes"]]
    const [isSpinning, setIsSpinning] = useState(null)

    // setting up a DOM reference so I can make CSS changes to the winning prize
    const winningPrize = useRef(null)

    function handleSpin() {
        let randomNumber = Math.round(Math.random()*(prizeList.length-1))
        const selectedPrize = prizeList[randomNumber];
        console.log(selectedPrize);
        setIsSpinning(true);

        // apply class after the duration of the animation
        setTimeout(() => {}, 4000)
    }

    let normalBox = styles.box;
    let animatedBox = styles.animatedBox;

    return (
        <div>
            <div className={styles.horizontalFlexContainer}>
            <Button onClick={handleSpin} colorPalette="teal" className={styles.spinButton}>Spin!</Button>
            <Stack>
                <div className={isSpinning ? animatedBox : normalBox}>10m break</div>
                <div className={isSpinning ? animatedBox : normalBox}>Chess game</div>
                <div className={isSpinning ? animatedBox : normalBox}>Walk</div>
                <div className={isSpinning ? animatedBox : normalBox}>Croissant</div>
                <div className={isSpinning ? animatedBox : normalBox}>Coffee</div>
                <div className={isSpinning ? animatedBox : normalBox}>Early finish</div>
                <div className={isSpinning ? animatedBox : normalBox}>Takeaway</div>
                <div className={isSpinning ? animatedBox : normalBox}>Buy clothes</div>
            </Stack>
            </div>
        </div>
    )
}

export default SpinPage