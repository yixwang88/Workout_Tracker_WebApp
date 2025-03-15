import React from "react";
import PropTypes from "prop-types"
import editIcon from "../edit_icon.png"
import "./WorkoutCard.css"

function WorkoutCard({ workout, onEdit, onDelete }) {
  console.log(workout)
  const type = workout.anaerobicExercises.length > 0 ? "Anaerobic" : "Aerobic"
  const exercises = workout.anaerobicExercises.length > 0 ? workout.anaerobicExercises : workout.aerobicExercises

    return (
        <div className="workout-card">
            <div className="flex justify-center items-center gap-2">
                <h1 className="center basis">{workout.title}</h1>
                <button className="btn1" onClick={() => onEdit(id)}>
                    <img src={editIcon} alt="edit" className="icon" />
                </button>
                <button className="btn2" onClick={() => onDelete(id)}>x</button>

            </div>
            {exercises.map((exercise, index) => (
                <li key={exercise.name} className="exercise-card no-bullets">
                    <div className="container clickable-card min-w-[250px]">
                        <div className="flex">
                            <div className="basis-2/16 flex items-center justify-center">
                                <h1 className="text-[20px] font-bold">{index + 1}</h1>
                            </div>
                            <div className="basis-14/16">
                                <b>{exercise.name}</b>
                                {type == "Anaerobic" && (
                                  <>
                                    <div className="flex gap-2">
                                        <p className="basis-3/8">{`Sets: ${exercise.sets}`}</p>
                                        <p className="basis-4/8">{`Reps: ${exercise.reps}`}</p>
                                    </div>
                                    <p>{"Starting at " + exercise.weight}</p>
                                  </>
                                )}
                                {type == "Aerobic" && (
                                  <div className="flex gap-2">
                                      <p>{`${exercise.minutes} minutes at ${exercise.intensity} intensity.`}</p>
                                  </div>
                                )}

            
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