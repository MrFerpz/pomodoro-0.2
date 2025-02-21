import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import FightPage from './pages/FightPage/FightPage'
import AchievementsPage from './pages/AchievementsPage/AchievementsPage'
import ShopPage from './pages/ShopPage/ShopPage'
import ProfilePage from './pages/ProfilePage'
import Header from "./components/Header/Header/Header"
import SpinPage from "./pages/SpinPage/SpinPage"
import { Provider } from "./components/ui/provider"

function App() {
  // initial state is empty
  const [coins, setCoins] = useState(0);
  const [stats, setStats] = useState({completions: 0, sessionRecord: [], totaloinsEarned: 0});

  // check if there is previous saved data
  useEffect(() => {
    const storedCoins = localStorage.getItem("coins");
    const storedStats = localStorage.getItem("stats");

    // if yes, set data to that
    if (storedCoins) {
      setCoins(parseInt(storedCoins, 10))
      }

    if (storedStats) {
      setStats(JSON.parse(storedStats))
    }
    }, [])

    // saving to storage every time stats or coins are updated
    useEffect(() => {
      localStorage.setItem("coins", coins);
      localStorage.setItem("stats", JSON.stringify(stats))
    },
    [stats, coins]
    )

  return (
    <Provider>
      <div>
        <Header coins={coins}/>
        <section>
          <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="fight" element={<FightPage coins={coins} updateCoins={setCoins} updateStats={setStats}/>}/>
            <Route path="shop" element={<ShopPage coins={coins} updateCoins={setCoins}/>}/>
            <Route path="shop/spin" element={<SpinPage/>}/>
            <Route path="achievements" element={<AchievementsPage/>}/>
            <Route path="profile" element={<ProfilePage stats={stats}/>}/>
          </Routes>
        </section>
      </div>
    </Provider>
  )
}

export default App
