import React from "react";
import PropTypes from "prop-types"
import editIcon from "./edit_icon.png"
import "./WorkoutCard.css"

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



function WorkoutCard({ workout, name, id, onEdit, onDelete }) {


    return (
        <div className="workout-card">
            <div className="flex justify-center items-center gap-2">
                <h1 className="center basis">{name}</h1>
                <button className="btn1" onClick={() => onEdit(id)}>
                    <img src={editIcon} alt="edit" className="icon" />
                </button>
                <button className="btn2" onClick={() => onDelete(id)}>x</button>

            </div>
            {workout.map((exercise, index) => (
                <li key={exercise.name} className="exercise-card no-bullets">
                    <div className="container clickable-card min-w-[250px]">
                        <div className="flex">
                            <div className="basis-2/16 flex items-center justify-center">
                                <h1 className="text-[20px] font-bold">{index + 1}</h1>
                            </div>
                            <div className="basis-14/16">
                                <b>{exercise.name}</b>
                                <div className="flex gap-2">
                                    <p className="basis-3/8">{`Sets: ${exercise.sets}`}</p>
                                    <p className="basis-4/8">{`Reps: ${exercise.reps}`}</p>

                                </div>
                                <p>{"Starting at " + exercise.weight}</p>
                            </div>
                        </div>
                    </div>
                </li>
            ))}
        </div>
    )
}

WorkoutCard.propTypes = {
    workout: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired,
            weight: PropTypes.string.isRequired,
            sets: PropTypes.string.isRequired,
            reps: PropTypes.string.isRequired,
        })
    ).isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.number,
};

export default WorkoutCard;