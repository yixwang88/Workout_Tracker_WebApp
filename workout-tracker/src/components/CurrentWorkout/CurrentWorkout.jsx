import "./CurrentWorkout.css"
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const CurrentWorkout = function () {

  const { user } = useSelector((state) => state.auth)
  const loggedIn = user?.email

  const [time, setTime] = useState(0)
  const [isActive, setIsActive] = useState(false)

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

  const currentTask = user.tasks.find(task => task._id == user.currentTaskId)
  console.log(currentTask)

  const handleSaveCurrentWorkout = () => {

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
              {new Array(parseInt(exercise.sets)).fill('').map((_, setIndex) => (
                <div className="flex items-center justify-between" key={setIndex}>
                  <p className="w-[20%]">Set {setIndex + 1}</p>
                  <p className="w-[20%]">{exercise.weight} lbs</p>
                  <p className="w-[20%]">{exercise.reps} reps</p>
                  <input  className="w-[20%] h-[15px]" type="checkbox"></input>
                </div>
              ))}
            </li>
          ))}
          {currentTask.workout.aerobicExercises && currentTask.workout.aerobicExercises.map((exercise, exIndex) => (
            <li key={exIndex}>
              <p className="text-xl mb-3">{exercise.name}</p>
              <div className="flex items-center justify-between">
                <p className="w-[20%]">Length: {exercise.minutes} minutes</p>
                <input  className="w-[20%] h-[15px]" type="checkbox"></input>
              </div>
            </li>
          ))}
        </ul>
        <div className="flex mt-10">
          <button onClick={handleSaveCurrentWorkout} className="mx-auto hover:cursor-pointer rounded-full py-2 px-6 text-2xl bg-blue-300">Log Workout</button>
        </div>
      </div>
  )
}

export default CurrentWorkout;