import "./WorkoutPage.css";
import { useRef, useState} from "react";

const AddWorkoutDialog = () => {
  const [exercise, setExercise] = useState([{ name: "", sets: "", reps: "", weight: ""}]);
  const dialogRef = useRef<HTMLDialogElement>(null);
  

  // const addWorkout = () => {
  //   setWorkouts([...workouts, {exercise: "", sets: "", reps: "", weight: ""}]);
  // }  

  function handleChange(e) {
    const name = e.target.name;
    const weight = e.target.weight;
    const sets = e.target.sets;
    const reps = e.target.reps;

    setExercise([...values, {
        exercise: name,
        weight: weight,
        sets: sets,
        reps: reps
    }]);
  }
  
  const openDialog = () => {
    dialogRef.current?.showModal();
  }

  const closeDialog = () => {
    dialogRef.current?.close();
  }

  return (
    <div className="workout-page container">
        {/* Workout header */}
        <div className="pop-up-info">
            <h1>Add Workout</h1>
            <p>Please input information for your exercise.</p>
        </div>

        {/* Dropdown for Workout Type */}
        <div className="workout-type container">
            <h1>Workout Type</h1>
            <select className="">
                <option value="Anaerobic">Anaerobic</option>
                <option value="aerobic">Aerobic</option>
            </select>
        </div>

        {/* Input section */}
        <div className="input-selection container">
            <form>
                <ul>
                    <li>
                        <h2>Exercise Name</h2>
                        <input value={exercise.name} type="text" onChange={handleChange}></input>
                    </li>
                    <li>
                        <h2>Starting Weight</h2>
                        <input value={exercise.weight} type="text" onChange={handleChange}></input>
                    </li>
                    <li>
                        <h2>Sets</h2>
                        <input value={exercise.sets} type="text" onChange={handleChange}></input>
                    </li>
                    <li>
                        <h2>Reps</h2>
                        <input value={exercise.reps} type="text" onChange={handleChange}></input>
                    </li>
                </ul>
            </form>
        </div>

        {/* Add another exercise */}
        <div className="container">
            <button className="btn1">+ Add another exercise</button>
        </div>

        {/* Buttons */}
        <div className="container">
            <ul className="flex flex-row justify-end">
                <li className="basis-16 px-32">
                    <button onClick={closeDialog} className="btn1">
                        <div className="cancel-text">Cancel</div>
                    </button>
                </li>
                <li className="basis-16">
                    <button className="btn2">
                        <div className="submit-text">Submit</div>
                    </button>
                </li>
            </ul>
        </div>
    </div>
  );
};

export default AddWorkoutDialog;
