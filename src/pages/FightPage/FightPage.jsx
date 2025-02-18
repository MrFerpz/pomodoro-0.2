import Timer from "../../components/Timer/Timer"
import { Link } from "react-router-dom"

function FightPage({updateCoins, coins}) {
    return (
        <div>
            <Timer updateCoins={updateCoins} coins={coins}/>
        </div>
    )
}

export default FightPage