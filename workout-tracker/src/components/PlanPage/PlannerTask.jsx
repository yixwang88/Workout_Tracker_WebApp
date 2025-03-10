import { FaCheckCircle, FaRegCircle, FaTimesCircle } from "react-icons/fa"

function makeWorkout(title, workoutInfo, status) {
    return {
        "title": title,
        "workoutInfo": workoutInfo,
        "status": status
    }
}

function makeTask(title, date, workouts) {
    return {
        "title": title,
        "date": date,
        "workouts": workouts
    }
}

const WORKOUT_INCOMPLETE = "incomplete"
const WORKOUT_COMPLETE = "complete"
const WORKOUT_FAILED = "failed"

function PlannerTask({task}) {
    let workoutsDone = 0
    let workoutsTotal = 0
    task.workouts.forEach(workout => {
        workoutsTotal += 1
        if(workout.status == 1) {
            workoutsDone += 1
        }
    });
    const percentage = workoutsDone / workoutsTotal

    function statusIcon(status) {
        switch(status) {
            case 1:
                return <FaCheckCircle color="#0b0" className="row-span-2 m-1" />
            case 2:
                return <FaTimesCircle color="#b00" className="row-span-2 m-1" />
            default:
                return <FaRegCircle className="row-span-2 m-1" />
        }
    }

    const date = task.date
    const hours = date.getHours()
    const minutes = date.getMinutes()
    const totalMinutes = (hours * 60) + minutes
    const dayPercent = (totalMinutes / 1440) * 100

    return <div className="absolute" style={{"top": `${dayPercent}%`}}>
        <h1 className="text-lg font-bold">{task.title}</h1>
        {task.workouts.map(function(workout, index) {
            return <div key={index} className="grid content-center justify-center grid-cols-[min-content_1fr]">
                {statusIcon(workout.status)}
                <p>{workout.title}</p>
                <p className="text-gray-500">{workout.workoutInfo}</p>
            </div>
        })}
        <div className="flex flex-row content-center">
            <progress id="task-progress" value={percentage} max={1} className="rounded-full h-2 m-auto" />
            <label for="task-progress">{Math.round(percentage * 100)}%</label>
        </div>
    </div>
}

export { makeTask, makeWorkout, WORKOUT_INCOMPLETE, WORKOUT_FAILED, WORKOUT_COMPLETE }
export default PlannerTask