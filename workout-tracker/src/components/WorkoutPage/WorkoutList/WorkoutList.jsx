import React from "react"
import './WorkoutList.css';
import PropTypes from "prop-types"
import WorkoutCard from "../WorkoutCard/WorkoutCard";

export default function WorkoutList({ workouts, onEdit, onDelete }) {
    console.log(`workoutList: ${workouts}`);
    return (
        <div className='WorkoutList flex flex-wrap gap-x-5 gap-y-5'>
            {workouts && workouts.length > 0 ? (
                workouts.map((b) => (
                    <WorkoutCard 
                        key={b.id}
                        workout={b.exercises}
                        name={b.name}
                        onEdit={() => onEdit(b)}
                        onDelete={() => onDelete(b)}
                    />
                ))
            ) : (
                <p>No workouts found. Please try another search</p>
            )}
        </div>
    )
}

WorkoutList.propTypes = {
    workouts: PropTypes.array
};