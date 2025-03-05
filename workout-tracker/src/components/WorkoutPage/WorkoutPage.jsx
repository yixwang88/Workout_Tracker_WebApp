
import "./WorkoutPage.css";
import Popup from "./AddWorkoutModal";
import { useRef, useState } from "react";
import AddWorkoutModal from "./AddWorkoutModal";


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
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [workout, setWorkout] = useState([]);

    return (
        <div className="workout-page relative flex flex-col items-center">
            <button className="btn1 basis-1/2" onClick={() => setWorkout(workout1)}>Populate Workout</button>
            <button className="btn1 py-32" onClick={() => setModalIsOpen(true)}>Open Popup</button>

            <AddWorkoutModal 
                modalIsOpen={modalIsOpen}
                onClose={() => setModalIsOpen(false)}
                onSave={(data) => setWorkout([...workout, data])}
            />
        </div>
    );
};

export default WorkoutPage;
