import './App.css'
import { Routes, Route } from "react-router"
import HomePage from './pages/HomePage'
import TravelAgency from './pages/TravelAgencyPage'
import MemoryGame from './pages/MemoryGamePage'
import Ecommerce from './pages/EcommercePage'
import Analytics from './pages/AnalyticsPage'


function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/travelagency" element={<TravelAgency />}></Route>
      <Route path="/memorygame" element={<MemoryGame />}></Route>
      <Route path="/ecommerce" element={<Ecommerce />}></Route>
      <Route path="/analytics" element={<Analytics />}></Route>
    </Routes>
    </>
  )
}
export default App