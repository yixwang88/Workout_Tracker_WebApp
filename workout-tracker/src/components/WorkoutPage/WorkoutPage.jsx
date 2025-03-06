
import "./WorkoutPage.css";
import Popup from "./AddWorkoutModal/AddWorkoutModal";
import { useRef, useState } from "react";
import AddWorkoutModal from "./AddWorkoutModal/AddWorkoutModal";
import WorkoutCard from "./WorkoutCard/WorkoutCard";
import WorkoutList from "./WorkoutList/WorkoutList"
import Navbar from "../Navbar/Navbar";


const workouts = [
    {
        id: 1,
        name: "Workout 1",
        list:
            [
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
                }
            ]
    },
    {
        id: 2,
        name: "Workout 2",
        list:
            [
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
                }
            ]
    },
    {
        id: 3,
        name: "Workout 3",
        list:
            [
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
                }
            ]
    }
];



const WorkoutPage = () => {
    // A workout is a list of exercises
    const [workoutList, setWorkoutList] = useState([{}]);
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [activeWorkout, setActiveWorkout] = useState([]);


    return (
        <>
            <Navbar homepage={false} />
            <div className="workout-page relative flex flex-col items-center gap-2">
                <div className="banner flex items-center justify-center relative">

                    <h1 className="">Your Workouts</h1>
                    <button className="btn3" onClick={() => setModalIsOpen(true)}>New Workout</button>
                </div>
                <button className="btn1 basis-1/2" onClick={() => setActiveWorkout(workouts)}>Populate Workout</button>

                <WorkoutList workoutList={workouts} />

                <AddWorkoutModal
                    modalIsOpen={modalIsOpen}
                    onClose={() => setModalIsOpen(false)}
                    onSave={(data) => setActiveWorkout([...activeWorkout, data])}
                />
            </div>
        </>
    );
};

export default WorkoutPage;
