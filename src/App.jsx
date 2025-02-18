import './App.css'
import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage/HomePage'
import FightPage from './pages/FightPage'
import AchievementsPage from './pages/AchievementsPage'
import ShopPage from './pages/ShopPage'


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="fight" element={<FightPage/>}/>
        <Route path="shop" element={<ShopPage/>}/>
        <Route path="achievements" element={<AchievementsPage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
