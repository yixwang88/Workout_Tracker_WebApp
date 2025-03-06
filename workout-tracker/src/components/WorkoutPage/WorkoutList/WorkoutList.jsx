import React from "react"
import './WorkoutList.css';
import WorkoutCard from "../WorkoutCard/WorkoutCard";

export default function BusinessList({ workoutList }) {
    console.log(workoutList)
    return (
        <div className='WorkoutList'>
            {workoutList.length > 0 ? (
                workoutList.map((b) => (
                    <WorkoutCard key={b.id} workout={b} name={b.name}/>
                ))
            ) : (
                <p>No workouts found. Please try another search</p>
            )}
        </div>
    )
}