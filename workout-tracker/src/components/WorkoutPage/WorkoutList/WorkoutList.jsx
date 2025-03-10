import React from "react"
import './WorkoutList.css';
import PropTypes from "prop-types"
import WorkoutCard from "../WorkoutCard/WorkoutCard";

export default function WorkoutList({ workoutList}) {
    console.log(`${workoutList}`)
    return (
        <div className='WorkoutList flex flex-wrap gap-x-5 gap-y-5'>
            {workoutList.length > 0 ? (
                workoutList.map((b) => (
                    <WorkoutCard key={b.id} workout={b.list} name={b.name}/>
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