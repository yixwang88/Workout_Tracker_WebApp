import React from "react"
import Navbar from "./components/Navbar/Navbar"
import { Routes, Route } from 'react-router-dom'
import LoginPage from "./components/LoginPage/LoginPage"
import Homepage from "./components/Homepage/Homepage"
import Plan from "./components/Plan/Plan.jsx"
import ExercisePlan from './components/ExercisePage/ExercisePage.jsx'
import WorkoutPage from "./components/WorkoutPage/WorkoutPage.jsx"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/plan' element={<Plan/>}/>
        <Route path='/exercise' element={<ExercisePlan/>}/>
      </Routes>
    </>
  );
}

export default App
