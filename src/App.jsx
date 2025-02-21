import { useState } from 'react'
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
  const [coins, setCoins] = useState(0);
  const [stats, setStats] = useState({completions: 0, sessionRecord: [], totalCoinsEarned: 0});

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
