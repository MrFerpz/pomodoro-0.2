import { useState, useEffect } from "react"
import { Button, HStack } from "@chakra-ui/react"
import { Slider } from "../../components/ui/slider"
import styles from "./Timer.module.css"
import Icons from "../Icons"

function Timer({updateCoins, coins}) {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(25);
    const [isActive, setIsActive] = useState(false);
    const [value, setValue] = useState([25]);

    useEffect(() => {
        let intervalId;

        if (isActive) {
            intervalId = setInterval(() => {
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(intervalId);
                        setIsActive(false);
                        updateCoins(prevCoins => prevCoins + 10);
                        alert(`Good job! You've earned 10 coins. You now have ${coins + 10}. Head to the shop to spend your earnings!`);
                    } else {
                        setMinutes(prevMinutes => prevMinutes - 1);
                        setSeconds(59);
                    }
                } else {
                    setSeconds(prevSeconds => prevSeconds - 1)
                }
            }, 1000);
        }
        

        return() => clearInterval(intervalId);
    }, [isActive, minutes, seconds, coins])

    function resetTimer() {
        setIsActive(false);
        setMinutes(25);
        setSeconds(0);
    }

    let formattedMinutes = String(minutes).padStart(2, '0');
    let formattedSeconds = String(seconds).padStart(2, '0');
    let formattedTime = `${formattedMinutes}:${formattedSeconds}`

    function handleValueChange(e) {
        let newValue = e.value;
        setMinutes(newValue);
        setValue(newValue);
    }

    return (
        <div>
            <Slider 
            colorPalette="teal"
            value={value}
            onValueChange={handleValueChange}
            max={50}
            min={20}
            />
            <div className={styles.timeText}>{formattedTime}</div>
            <div className = {styles.estimatedLootContainer}>
                <div>Estimated Loot:</div>
                <div className = {styles.estimatedCoinNumber}>{Math.round((value / 25) * 10)-1}-{Math.round((value / 25) * 10)+1}</div>
                <div className = {styles.coinIcon}>{Icons.coin}</div>
            </div>
            {isActive ? ( <img className={styles.fighting} src='https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExanJvNnhxNzc1eXczN3RncW53cTIwaHY1eHFkdjRwYnNvMjVoaXRmMyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/AHMPR6ASCvZY17KsdB/giphy.gif'></img> ) : (<img src="src/assets/fightingStatic.png" className={styles.pauseFighting}></img>)}
            <HStack className={styles.buttonContainer}>
                {isActive ? (
                <Button colorPalette="red" onClick={() => setIsActive(false)}>Pause</Button>) : (
                <Button colorPalette="teal" className={styles.playButton} onClick={() => setIsActive(true)}>Play</Button>)}
                <Button onClick={resetTimer}>Reset</Button>
            </HStack>
        </div>
    )
}

export default Timer