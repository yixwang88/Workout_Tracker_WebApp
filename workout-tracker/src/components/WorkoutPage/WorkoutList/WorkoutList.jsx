import React from "react"
import './WorkoutList.css';
import PropTypes from "prop-types"
import WorkoutCard from "../WorkoutCard/WorkoutCard";

export default function WorkoutList({ workoutList, onEdit, onDelete }) {
    console.log(`Workout List ${workoutList[0].name} ${workoutList[0].list[0].name}`);
    return (
        <div className='WorkoutList flex flex-wrap gap-x-5 gap-y-5'>
            {workoutList.length > 0 ? (
                workoutList.map((b) => (
                    <WorkoutCard 
                        key={b.id}
                        workout={b.list}
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
    workoutList: PropTypes.array
};