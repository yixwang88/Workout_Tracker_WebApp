import React from "react"
import './WorkoutList.css';
import PropTypes from "prop-types"
import WorkoutCard from "../WorkoutCard/WorkoutCard";

export default function WorkoutList({ workoutList, onEdit, onDelete }) {
    console.log(`workoutList: ${workoutList}`);
    return (
        <div className='WorkoutList flex flex-wrap gap-x-5 gap-y-5'>
            {workoutList && workoutList.length > 0 ? (
                workoutList.map((b) => (
                    <WorkoutCard 
                        key={b.id}
                        workout={b}
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