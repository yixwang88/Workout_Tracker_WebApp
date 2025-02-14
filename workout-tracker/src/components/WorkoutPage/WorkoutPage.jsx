
import "./WorkoutPage.css";
import Popup from "./Popup";
import { useRef, useState } from "react";


const workout1 = [
    {
        id: 1,
        name: "Bicep Curls",
        weight: "45 lbs",
        sets: "3",
        reps: "12"
    },
    {
        id: 2,
        name: "Front Lat Pulldowns",
        weight: "100 lbs",
        sets: "3",
        reps: "12"
    },
    {
        id: 3,
        name: "Rope Face Pulls",
        weight: "30 lbs",
        sets: "3",
        reps: "15-20"
    },
    {
        id: 4,
        name: "Concentration Curls",
        weight: "20 lbs",
        sets: "3",
        reps: "15"
    },
];

const WorkoutPage = () => {
    // A workout is a list of exercises
    const [workoutList, setWorkoutList] = useState([{}]);
    const [workout, setWorkout] = useState([]);
    const [activeExercise, setActiveExercise] = useState({
        id: "",
        name: "",
        weight: "",
        sets: "",
        reps: "",
    });
    const [showPopup, setShowPopup] = useState(false);

    function handleChange(e) {
        {/* picks out the specific input, which is the target */ }
        const { name, value } = e.target;
        setActiveExercise((prevState) => {
            return {
                ...prevState, [name]: value
            };
        });
    };

    const addExercise = () => {
        if (!activeExercise.name || !activeExercise.weight || !activeExercise.sets || !activeExercise.reps) {
            alert("Please fill in all fields before adding an exercise.")
            return;
        }
        console.log(activeExercise)
        activeExercise.id = workout.length;
        console.log(activeExercise)
        console.log(workout)
        setWorkout([...workout, activeExercise]);
        console.log(workout)

        setActiveExercise({ id: "", name: "", sets: "", reps: "", weight: "" });
    }

    return (
        <div className="workout-page relative flex flex-col items-center">
            <button className="btn1 basis-1/2" onClick={() => setWorkout(workout1)}>Populate Workout</button>
            <button className="btn1 py-32" onClick={() => setShowPopup(true)}>Open Popup</button>
            <Popup className="relative z-0" trigger={showPopup} setTrigger={setShowPopup}>
                <div className="container flex-none basis-1/3">
                    {/* Workout header */}
                    <div className="pop-up-info">
                        <div className="flex justify-between">
                            <h1>Add Workout</h1>
                            <button className="btn1 flex px-4" onClick={() => setShowPopup(false)}>Close</button>
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

                    {workout.map((exercise) => (
                        <li key={exercise.id} className="exercise-card">
                            <div className="container clickable-card">
                                <div className="flex">
                                    <div className="basis-1/16">
                                        <h1 className="text-[20px] font-bold">{exercise.id}</h1>
                                    </div>
                                    <div>
                                        <b>{exercise.name}</b>
                                        <p>{exercise.sets + " sets of " + exercise.reps + " starting at " + exercise.weight}</p>
                                    </div>
                                </div>
                            </div>
                        </li>
                    ))}

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
                                    value={activeExercise.name || ""}
                                    name="name"
                                    placeholder="Enter name"
                                    type="text"
                                    onChange={handleChange}
                                ></input>
                            </div>
                            <div className="">
                                <h2>Starting Weight</h2>
                                <input
                                    value={activeExercise.weight || ""}
                                    name="weight"
                                    placeholder="Enter weight (use units)"
                                    type="text"
                                    onChange={handleChange}
                                ></input>
                            </div>
                            <div className="">
                                <h2>Sets</h2>
                                <input
                                    value={activeExercise.sets || ""}
                                    name="sets"
                                    placeholder="Enter sets"
                                    type="text"
                                    onChange={handleChange}
                                ></input>
                            </div>
                            <div className="">
                                <h2>Reps</h2>
                                <input
                                    value={activeExercise.reps || ""}
                                    name="reps"
                                    placeholder="Enter reps"
                                    type="text"
                                    onChange={handleChange}
                                ></input>
                            </div>
                        </form>
                    </div>

                    {/* Add another exercise */}
                    <div className="add-exercise">
                        <button className="btn1" onClick={() => addExercise(activeExercise)}>+ Add exercise</button>
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
