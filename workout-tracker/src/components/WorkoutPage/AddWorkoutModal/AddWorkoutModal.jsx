import React from 'react'
import "./addWorkoutModal.css"
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { Toaster, toast } from 'react-hot-toast';
import Modal from "react-modal"

Modal.setAppElement("#modal-root");

const modalStyle = {
    overlay: {
        backgroundColor: "rgba(56, 56, 56, 0.9)",
    },
    content: {
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
    },
};

const addWorkoutSchema = z.object({
    name: z.string({ message: "Exercise name is required." }).min(1, { message: "Exercise name is required." }),
    weight: z.number({ message: "Weight is required." }).positive({ message: "Weight must be positive." }),
    sets: z.number({ message: "Number of sets is required." }).positive({ message: "The number of sets must be positive." }).int({ message: "Number of sets must be an integer." }),
    reps: z.number({ message: "Number of reps is required." }).positive({ message: "The number of reps must be positive." }).int({ message: "Number of reps must be an integer." }),
})

const AddWorkoutModal = ({ modalIsOpen, onClose, onSave }) => {

    if (!modalIsOpen) return null;

    const [workout, setWorkout] = useState([]);

    const { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: zodResolver(addWorkoutSchema)
    });

    const addExercise = (data) => {
        console.log(`data: ${data}`)
        setWorkout([...workout, data]);
        console.log(workout)
        reset();
    }

    // Display validation errors sequentially via toast notifications
    useEffect(() => {
        const errorKeys = Object.keys(errors);
        errorKeys.forEach((key, index) => {
            setTimeout(() => {
                toast.error(errors[key].message);
            }, (index + 1) * 1000);
        });
    }, [errors]);

    const onSubmit = (data) => {
        onSave(data);
        reset();
        onClose();
    }

    return (
        <div className="workout-modal flex items-center" >
            <Modal className="workout-modal relative z-0" isOpen={modalIsOpen} style={modalStyle} onRequestClose={onClose}>
                <div className="container flex-none basis-1/3">
                    {/* Workout header */}
                    <div className="pop-up-info">
                        <div className="flex justify-between">
                            <h1>Add Workout</h1>
                            <button className="btn1 flex px-4" onClick={onClose}>Close</button>
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

                    {workout.map((exercise, index) => (
                        <li key={exercise.name} className="exercise-card">
                            <div className="container clickable-card">
                                <div className="flex">
                                    <div className="basis-1/16">
                                        <h1 className="text-[20px] font-bold">{index + 1}</h1>
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
                        <form className="grid grid-cols-2 gap-4" onSubmit={handleSubmit(addExercise)}>
                            <div className="">
                                <h2>Exercise Name</h2>
                                <input
                                    name="name"
                                    placeholder="Enter name"
                                    type="text"
                                    {...register("name")}
                                ></input>
                            </div>
                            <div className="">
                                <h2>Starting Weight (Lbs)</h2>
                                <input
                                    name="weight"
                                    placeholder="0"
                                    type="number"
                                    {...register("weight", { valueAsNumber: true })}
                                ></input>
                            </div>
                            <div className="">
                                <h2>Sets</h2>
                                <input
                                    name="sets"
                                    placeholder="0"
                                    type="number"
                                    {...register("sets", { valueAsNumber: true })}
                                ></input>
                            </div>
                            <div className="">
                                <h2>Reps</h2>
                                <input
                                    name="reps"
                                    placeholder="0"
                                    type="number"
                                    {...register("reps", { valueAsNumber: true })}
                                ></input>
                            </div>
                            {/* Submit exercise */}
                            <div className="add-exercise">
                                <button type="submit" className="btn1">+ Add exercise</button>
                            </div>
                        </form>
                    </div>
                    <Toaster />



                    {/* Buttons */}
                    <div className="px-16">
                        <ul className="flex flex-row justify-end gap-4">
                            <li className="basis-16">
                                <button onClick={onClose} className="btn1">
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
            </Modal>
        </div>
    )
}

export default AddWorkoutModal