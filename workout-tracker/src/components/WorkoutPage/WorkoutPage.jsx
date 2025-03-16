
import "./WorkoutPage.css";
import Popup from "./AddWorkoutModal/AddWorkoutModal";
import { act, useEffect, useRef, useState } from "react";
import AddWorkoutModal from "./AddWorkoutModal/AddWorkoutModal";
import WorkoutCard from "./WorkoutCard/WorkoutCard";
import WorkoutList from "./WorkoutList/WorkoutList"
import RedirectLoginPage from "../RedirectLoginPage/RedirectLoginPage";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { deleteCustomWorkout } from "../../store/slices/authSlice";

const WorkoutPage = () => {
    const { user } = useSelector((state) => state.auth)
    const { customWorkouts : customWorkoutList } = useSelector(state => state.auth.user)
    const loggedIn = user?.email
    const dispatch = useDispatch()

    // A workout is a list of exercises
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [activeWorkout, setActiveWorkout] = useState([]);

    const openModal = () => {
        if(!modalIsOpen) {
            setModalIsOpen(true);
        }
    }

    const handleSaveWorkout = (workout) => {
        console.log(`workout saved name: ${workout.name}`);
        console.log(`workout saved list: ${workout.exercises}`);
        if(modalIsOpen) {
            setModalIsOpen(false);
        }
    }

    const closeModal = () => {
        if(modalIsOpen) {
            setModalIsOpen(false);
        }
        setActiveWorkout([]);
    }

    const editWorkout = (workout) => {
        setActiveWorkout(workout);
        openModal();
    }

    const handleDelete = async (deletionId) => {
        const res = await fetch('http://localhost:3000/api/delete_custom_workout', {
          method: "PUT",
          headers: { "Content-Type": "application/json"},
          body: JSON.stringify({email: user.email, deletionId})
        })
        if (!res.ok) {
          console.error("Could not update database")
        } else {
          dispatch(deleteCustomWorkout(deletionId))
        }
    }

    return (
        <>
            {!loggedIn ? <RedirectLoginPage /> :
                (<div className="workout-page relative flex flex-col items-center gap-2">
                    <div className="banner flex items-center justify-center relative">

                        <h1 className="">Your Workouts</h1>
                        <button className="btn3" onClick={() => setModalIsOpen(true)}>New Workout</button>
                    </div>

                    <WorkoutList 
                        workoutList={ customWorkoutList ? customWorkoutList : [] }
                        onEdit={(workout) => editWorkout(workout)}
                        onDelete={(deletionId) => handleDelete(deletionId)}
                    />


                    { modalIsOpen && <AddWorkoutModal
                        loadedWorkout={activeWorkout}
                        modalIsOpen={modalIsOpen}
                        onClose={closeModal}
                        onSave={handleSaveWorkout}
                        onRequestClose={closeModal}
                    />}
                </div>)
            }
        </>
    );
};

export default WorkoutPage;
