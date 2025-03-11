import { useState } from 'react';
import DatePicker from 'react-datepicker'

import 'react-datepicker/dist/react-datepicker.css'
import NewPlanModal from './NewPlanModal';
import AddWorkoutModal from '../WorkoutPage/AddWorkoutModal/AddWorkoutModal';

import { useForm } from 'react-hook-form';
import * as z from "zod";
import { useDispatch, useSelector } from 'react-redux';
import { addTask } from '../../store/slices/authSlice';

function TopBar({date, onSetDate}) {
    const { user, token } = useSelector((state) => state.auth.user)
    const [newPlanOpen, setNewPlanOpen] = useState(false)
    const dispatch = useDispatch()

    const submitMockTask = async () => {
        const task = {
            title: "My Cool Workout",
            date: new Date().toISOString(),
            workouts: [{
                title: "Squats",
                workoutInfo: "5 sets of 10 reps",
            }]
        }
        const res = await fetch('http://localhost:3000/api/create_task', {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                token: token,
                task: task
            })
        })
        if(res.ok) {
            dispatch(addTask(task))
        }
        else {
            console.error("mock task error: ", (await res.json()).message)
        }
    }

    return <div className="flex flex-row justify-between">
        {/* Left buttons */}
        <div className="flex flex-row gap-2">
            {/* Add Plan button */}
            <button onClick={() => submitMockTask()} className="rounded-lg bg-black text-white p-1 hover:cursor-pointer">Add Plan</button>

            {/* Month Selector */}
            <DatePicker
                selected={date}
                onChange={onSetDate}
                className="rounded-lg bg-white border border-[#B9B9B9] text-[#898989] p-1 hover:cursor-pointer"
            />

            {/* Filter button */}
            <button className="rounded-lg bg-white border border-[#B9B9B9] text-[#898989] p-1 hover:cursor-pointer">Filter</button>
        </div>

        {/* Search bar */}
        <div className="bg-white border rounded-lg border-solid border-[#B9B9B9] p-1">
            <input placeholder="Search Task" className="text-xs h-full outline-none"></input>
        </div>
    </div>
}

export default TopBar;