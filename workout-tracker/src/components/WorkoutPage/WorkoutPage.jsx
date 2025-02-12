import "./WorkoutPage.css";
import Popup from "./Popup";
import { useRef, useState } from "react";

const WorkoutPage = () => {
  const [exercise, setExercise] = useState([{ name: "", sets: "", reps: "", weight: ""}]);
  const [showPopup, setShowPopup] = useState(false);

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

  return (
    <div className="workout-page flex justify-center">
        <button className="btn1 py-32" onClick={() => setShowPopup(true)}>Open Popup</button>
        <Popup trigger={showPopup} setTrigger={setShowPopup}>
            <div className="container flex-none basis-1/3">
            {/* Workout header */}
            <div className="pop-up-info">
                <div className="flex justify-between">
                    <h1>Add Workout</h1>
                    <button className="close-btn flex px-4" onClick={() => setShowPopup(false)}>close</button>
                </div>
                <p>Please input information for your exercise.</p>
            </div>

            {/* Dropdown for Workout Type */}
            <div className="workout-type">
                <div>
                    <h1>Workout Type</h1>
                </div>
                <select className="flex justify-center">
                    <option value="Anaerobic">Anaerobic</option>
                    <option value="aerobic">Aerobic</option>
                </select>
            </div>

            {/* Separator */}
            <div className="separator">
                <div className="border"></div>
            </div>

            {/* Input section */}
            <div className="input-section">
            {/* <form className="flex flex-wrap justify-center gap-4"> */}
                <form className="grid grid-cols-2 gap-4">
                    <div className="">
                        <h2>Exercise Name</h2>
                        <input
                            value={exercise.name}
                            placeholder="Enter name"
                            type="text" 
                            onChange={handleChange}
                        ></input>
                    </div>
                    <div className="">
                        <h2>Starting Weight</h2>
                        <input
                            value={exercise.weight}
                            placeholder="Enter weight"
                            type="text"
                            onChange={handleChange}
                        ></input>
                    </div>
                    <div className="">
                        <h2>Sets</h2>
                        <input 
                            value={exercise.sets}
                            placeholder="Enter sets"
                            type="text"
                            onChange={handleChange}
                        ></input>
                    </div>
                    <div className="">
                        <h2>Reps</h2>
                        <input
                            value={exercise.reps}
                            placeholder="Enter reps"
                            type="text"
                            onChange={handleChange}
                        ></input>
                    </div>
                </form>
            </div>

            {/* Add another exercise */}
            <div className="add-exercise">
                <button className="btn1">+ Add another exercise</button>
            </div>

            {/* Buttons */}
            <div className="px-16">
                <ul className="flex flex-row justify-end gap-4">
                    <li className="basis-16">
                        <button onClick={() => setShowPopup(false)} className="btn1">
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
        </Popup>
    </div>
  );
};

export default WorkoutPage;
