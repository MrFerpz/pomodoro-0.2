import './App.css'
import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import FightPage from './pages/FightPage'
import AchievementsPage from './pages/AchievementsPage'
import ShopPage from './pages/ShopPage'
import ProfilePage from './pages/ProfilePage'
import Header from "./components/Header/Header"

function App() {

  let coins = 0;

  return (
    <div>
      <Header coins={coins}/>
      <section>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="fight" element={<FightPage/>}/>
          <Route path="shop" element={<ShopPage/>}/>
          <Route path="achievements" element={<AchievementsPage/>}/>
          <Route path="profile" element={<ProfilePage/>}/>
        </Routes>
      </section>
    </div>
  )
}

export default App
