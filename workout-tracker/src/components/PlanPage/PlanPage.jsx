import { useState } from "react";
import Planner from "./Planner";
import TopBar from "./TopBar";
import RedirectLoginPage from "../RedirectLoginPage/RedirectLoginPage";
import { useSelector } from "react-redux";

const PlanPage = function () {
    const [dateFilter, setDateFilter] = useState(new Date())
    const { user } = useSelector((state) => state.auth)
    const loggedIn = user?.email

    return (
        <>
          {!loggedIn ? <RedirectLoginPage/> :
            <div className="flex gap-4 box-border h-screen flex-col grow bg-[#FAFAFA] p-10">
                <TopBar date={dateFilter} onSetDate={setDateFilter} />
                <Planner dateFilter={dateFilter} />
            </div>
          }
        </>
    )
}

export default PlanPage;