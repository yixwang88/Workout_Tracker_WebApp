import React from "react"
import Navbar from "./components/Navbar/Navbar"
import { Routes, Route } from 'react-router-dom'
import LoginPage from "./components/LoginPage/LoginPage"
import Homepage from "./components/Homepage/Homepage"
import PlanPage from "./components/PlanPage/PlanPage.jsx"
import ExercisePlan from './components/ExercisePage/ExercisePage.jsx'
import WorkoutPage from "./components/WorkoutPage/WorkoutPage.jsx"
import ThemePage from "./components/ThemePage/ThemePage.jsx"
import CurrentWorkout from "./components/CurrentWorkout/CurrentWorkout.jsx"
import PathNotFound from "./components/PathNotFound/pathNotFound.jsx"
import GetStarted from "./components/ExercisePage/GetStarted.jsx"
import { Toaster } from "react-hot-toast"
import { ThemeProvider } from "./contexts/ThemeContext"

function App() {

  return (
    <ThemeProvider>
      <Toaster />
      <Navbar />
      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/plan' element={<PlanPage/>}/>
        <Route path='/exercise' element={<ExercisePlan/>}/>
        <Route path="/exercise/get-started" element={<GetStarted/>}/>
        <Route path='/add-workout' element={<WorkoutPage/>}/>
        <Route path="/current-workout" element={<CurrentWorkout/>} />
        <Route path='/theme' element={<ThemePage/>}/>
        <Route path="/*" element={<PathNotFound/>}></Route>
      </Routes>
    </ThemeProvider>
  );
}

export default App
