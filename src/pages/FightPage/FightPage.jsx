import Timer from "../../components/Timer/Timer"
import { Link } from "react-router-dom"
import Icons from "../../components/Icons"
import styles from "./FightPage.module.css"
import { useState } from "react";
import axios from "axios";
import { MdCancel } from "react-icons/md";

function FightPage({updateStats, updateCoins, coins}) {
    const [prompt, setPrompt] = useState("");
    const [output, setOutput] = useState("");
    const [isTimerComplete, setIsTimerComplete] = useState(false);

        function onComplete() {
            setIsTimerComplete(true)
        }

      async function submitPrompt() {
        try {
            const res = await axios.post("http://localhost:3001/api/generate", {
                message: "Jenkins has been on a mission. Summarise how it went in under 50 words. Think in the world of a roguelike dungeoncrawler."
            });
            const output = res.data.message;
            console.log(output);
            setOutput(output);
        } catch(err) {
            console.log(err)
        }
      }

    submitPrompt();

    return (
        <div>
            <div className={styles.homeButton}><Link to="/">{Icons.home}</Link></div>
            <div className={styles.shopButton}><Link to="../shop">{Icons.shop}</Link></div>
            <div className={styles.focusUp}>Send <b>Jenkins</b> on a mission (focus up!)</div>
            <Timer updateStats={updateStats} updateCoins={updateCoins} coins={coins} onComplete={onComplete}/>

            {isTimerComplete ? (
                <div className={styles.completionCardBackground}>
                        <div className={styles.completionCard}>
                            <div className={styles.title}>Mission Summary</div>
                            <div>{output}</div>
                            <MdCancel className={styles.cancelBtn} onClick={() => setIsTimerComplete(false)}/>
                        </div>
                </div>
            ) : (<></>) }
        </div>
    )
}

export default FightPage