import DatePicker from "react-datepicker";
import { Link } from "react-router-dom";

function TopBar({date, onSetDate, toggleModal}) {

    return <div className="flex flex-row justify-between">
        {/* Left buttons */}
        <div className="flex flex-row gap-2">
            {/* Add Plan button */}
            <button onClick={toggleModal} className="rounded-lg p-1 hover:cursor-pointer">Add Plan</button>

            {/* Month Selector */}
            <DatePicker
                selected={date}
                onChange={onSetDate}
                className="rounded-lg bg-(--bg-color) border border-[#B9B9B9] p-1 hover:cursor-pointer"
            />

            {/* Filter button */}
            <button className="rounded-lg bg-(--bg-color) border border-[#B9B9B9] p-1 hover:cursor-pointer">Filter</button>
            <Link to="/current-workout">
              <button className="px-2 rounded-lg p-1 hover:cursor-pointer">Current Workout</button>
            </Link>
        </div>

        {/* Search bar */}
        <div className="bg-(--bg-color) border rounded-lg border-solid border-[#B9B9B9] p-1">
            <input placeholder="Search Task" className="text-xs h-full outline-none"></input>
        </div>
    </div>
}

export default TopBar;