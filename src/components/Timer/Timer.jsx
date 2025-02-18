import { useState, useEffect } from "react"
import { Button, HStack } from "@chakra-ui/react"
import styles from "./Timer.module.css"

function Timer({updateCoins, coins}) {
    const [seconds, setSeconds] = useState(0);
    const [minutes, setMinutes] = useState(25);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let intervalId;

        if (isActive) {
            intervalId = setInterval(() => {
                if (seconds === 0) {
                    if (minutes === 0) {
                        clearInterval(intervalId);
                        setIsActive(false);
                        updateCoins(prevCoins => prevCoins + 10);
                        alert(`Good job! You've earned 10 coins. You now have ${coins + 10}`);
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

    return (
        <div>
            <div className={styles.timeText}>{formattedTime}</div>
            <HStack>
                {isActive ? (
                <Button onClick={() => setIsActive(false)}>Pause</Button>) : (
                <Button onClick={() => setIsActive(true)}>Start</Button>)}
                <Button onClick={resetTimer}>Reset</Button>
            </HStack>
        </div>
    )
}

export default Timer