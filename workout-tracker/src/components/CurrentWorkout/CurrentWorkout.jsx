import "./CurrentWorkout.css"
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { updateTask } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

const CurrentWorkout = function () {

  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { user } = useSelector((state) => state.auth)
  const loggedIn = user?.email
  const currentTask = user.tasks.find(task => task._id == user.currentTaskId)

  const [time, setTime] = useState(0)
  const [isActive, setIsActive] = useState(false)

  const startingChecked = [...currentTask.workout.anaerobicExercises, ...currentTask.workout.aerobicExercises].map((ex, index) => ex.status == "complete")

  const [exercisesChecked, setExercisesChecked] = useState(startingChecked)

  useEffect(() => {
    if (isActive) {
      setTimeout(() => {
        setTime(time + 1000)
      }, 1000)
    }
  }, [time, isActive]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setTime(0);
    setIsActive(false);
  };

  const getFormattedTime = (milliseconds) => {
    let totalSeconds = parseInt(milliseconds / 1000)
    let totalMinutes = parseInt(totalSeconds / 60)
    let totalHours = parseInt(totalMinutes / 24)

    let seconds = totalSeconds % 60
    let minutes = totalMinutes % 60
    let hours = totalHours % 24

    if (minutes < 10) { minutes = "0" + minutes }
    if (seconds < 10) { seconds = "0" + seconds }

    return `${hours}:${minutes}:${seconds}`
  }

  console.log(currentTask)

  const handleExercisesChecked = (exIndex) => {
    let newChecked = [...exercisesChecked]
    newChecked[exIndex] = !newChecked[exIndex]
    setExercisesChecked(newChecked)
  }

  const saveCurrentWorkout = async () => {
    let updatedCurrentTask = structuredClone(currentTask)
    const workoutType = updatedCurrentTask.workout.aerobicExercises.length > 0 ? "aerobicExercises" : "anaerobicExercises"
    updatedCurrentTask.workout[workoutType] = updatedCurrentTask.workout[workoutType].map((exercise, exIndex) => {
      return {
        ...exercise,
        status: exercisesChecked[exIndex] ? "complete" : "incomplete"
      }
    })
    
    // save to database
    const res = await fetch('http://localhost:3000/api/update_task', {
      method: "POST",
      headers: { "Content-Type": "application/json"},
      body: JSON.stringify({email: user.email, taskId: currentTask._id, updatedTask: updatedCurrentTask}),
    })
    if (!res.ok) {
      console.error("Could not update database")
    } else {
      dispatch(updateTask({
        updatedId: currentTask._id,
        updatedTask: updatedCurrentTask
      }))
      navigate("/plan")
    }

    // save to redux
  }

  return (
      <div className="max-w-3xl mx-auto mb-10">
        <div className="flex justify-between gap-10 items-end mt-10 mb-5">
          <h1 className="text-3xl font-bold w-[30%]">{currentTask.title}</h1>
          <p className="text-lg">{getFormattedTime(time)}</p>
          <button className={`text-lg rounded-full px-5 py-1 hover:cursor-pointer
            ${isActive ? "bg-red-300" : "bg-green-300"}`}
            onClick={toggleTimer}>
            {isActive ? "Stop" : "Start"} timer</button>
        </div>
        <ul className="flex flex-col gap-10">
          {currentTask.workout.anaerobicExercises && currentTask.workout.anaerobicExercises.map((exercise, exIndex) => (
            <li key={exIndex}>
              <p className="text-xl mb-3">{exercise.name}</p>
              <div className="flex items-center justify-between">
                <div className="w-[80%]">
                  {new Array(parseInt(exercise.sets)).fill('').map((_, setIndex) => (
                    <div className="flex items-center justify-between" key={setIndex}>
                      <p className="w-[20%]">Set {setIndex + 1}</p>
                      <p className="w-[20%]">{exercise.weight} lbs</p>
                      <p className="w-[20%]">{exercise.reps} reps</p>
                    </div>
                  ))}
                </div>
                <input onChange={() => handleExercisesChecked(exIndex)} className="w-[20%] h-[15px]" type="checkbox" checked={exercisesChecked[exIndex]}></input>
              </div>
            </li>
          ))}
          {currentTask.workout.aerobicExercises && currentTask.workout.aerobicExercises.map((exercise, exIndex) => (
            <li key={exIndex}>
              <p className="text-xl mb-3">{exercise.name}</p>
              <div className="flex items-center justify-between">
                <p className="w-[20%]">Length: {exercise.minutes} minutes</p>
                <input onChange={() => handleExercisesChecked(exIndex)} className="w-[20%] h-[15px]" type="checkbox" checked={exercisesChecked[exIndex]}></input>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-15 flex justify-center gap-5">
          <Link to={"/plan"}>
            <button className="hover:cursor-pointer rounded-full py-2 px-6 text-2xl bg-blue-300">back to plan</button>
          </Link>
          <button onClick={saveCurrentWorkout} className="hover:cursor-pointer rounded-full py-2 px-6 text-2xl bg-blue-300">Save Workout</button>
        </div>
      </div>
  )
}

export default CurrentWorkout;