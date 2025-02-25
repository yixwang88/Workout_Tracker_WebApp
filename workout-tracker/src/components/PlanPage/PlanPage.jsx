import { useState } from "react";
import Navbar from "../Navbar/Navbar";
import Planner from "./Planner";
import TopBar from "./TopBar";

const PlanPage = function () {
    const [dateFilter, setDateFilter] = useState(new Date())

    return (
        <>
            <Navbar />
            <div className="flex gap-4 box-border h-screen flex-col grow bg-[#FAFAFA] p-10">
                <TopBar date={dateFilter} onSetDate={setDateFilter} />
                <Planner dateFilter={dateFilter} />
            </div>
        </>
    )
}

export default PlanPage;