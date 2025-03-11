import React from "react"
import Navbar from "./components/Navbar/Navbar"
import { Routes, Route } from 'react-router-dom'
import LoginPage from "./components/LoginPage/LoginPage"
import Homepage from "./components/Homepage/Homepage"
import PlanPage from "./components/PlanPage/PlanPage.jsx"
import ExercisePlan from './components/ExercisePage/ExercisePage.jsx'
import WorkoutPage from "./components/WorkoutPage/WorkoutPage.jsx"
import CurrentWorkout from "./components/CurrentWorkout/CurrentWorkout.jsx"
import PathNotFound from "./components/PathNotFound/pathNotFound.jsx"
import { Toaster } from "react-hot-toast"

function App() {

  return (
    <>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/plan' element={<PlanPage/>}/>
        <Route path='/exercise' element={<ExercisePlan/>}/>
        <Route path='/add-workout' element={<WorkoutPage/>}/>
        <Route path="/current-workout" element={<CurrentWorkout/>} />
        <Route path="/*" element={<PathNotFound/>}></Route>
      </Routes>
    </>
  );
}

export default App
