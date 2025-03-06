import React from "react";
import PropTypes from "prop-types"
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



function WorkoutCard({workout, name }) {

    return (
        <div className="container">
            <h1 className="">{name}</h1>
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
};

export default WorkoutCard;