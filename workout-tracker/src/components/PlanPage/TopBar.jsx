function TopBar(props) {
    const startDate = props.date
    const toggleModal = props.toggleModal

    return <div className="flex flex-row justify-between">
        {/* Left buttons */}
        <div className="flex flex-row gap-2">
            {/* Add Plan button */}
            <button onClick={toggleModal} className="rounded-lg bg-black text-white p-1 hover:cursor-pointer">Add Plan</button>

            {/* Month Selector */}
            <button className="rounded-lg bg-white border border-[#B9B9B9] text-[#898989] p-1 hover:cursor-pointer">{startDate.toDateString()}</button>

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