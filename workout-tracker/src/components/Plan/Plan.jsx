import Planner from "./Planner";
import TopBar from "./TopBar";

const Plan = function() {
    return (
    <div className="flex gap-4 box-border h-screen flex-col grow bg-[#FAFAFA] p-10">
        <TopBar />
        <Planner />
    </div>
    )
}

export default Plan;