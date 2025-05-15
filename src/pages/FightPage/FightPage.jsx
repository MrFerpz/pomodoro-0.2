import Timer from "../../components/Timer/Timer"
import { Link } from "react-router-dom"
import Icons from "../../components/Icons"
import styles from "./FightPage.module.css"
import { useState } from "react";
import axios from "axios";

function FightPage({updateStats, updateCoins, coins}) {
    const [prompt, setPrompt] = useState("");
    const [output, setOutput] = useState("")

      async function submitPrompt() {
        try {
            const res = await axios.post("http://localhost:3001/api/generate", {
                message: prompt
            });
        const output = res.data.message;
        console.log(output);
        setOutput(output);
        } catch(err) {
            console.log(err)
        }
      }

    return (
        <div>
            <div className={styles.homeButton}><Link to="/">{Icons.home}</Link></div>
            <div className={styles.shopButton}><Link to="../shop">{Icons.shop}</Link></div>
            <div className={styles.focusUp}>Send <b>Jenkins</b> on a mission (focus up!)</div>
            <Timer updateStats={updateStats} updateCoins={updateCoins} coins={coins}/>
            <form onSubmit={(e)=>{e.preventDefault();submitPrompt()}}>
                <textarea placeholder="Ask AI a question" onChange={(e) => setPrompt(e.target.value)}></textarea>
                <button type="submit">Submit</button>
            </form>
            <div>{output}</div>
        </div>
    )
}

export default FightPage