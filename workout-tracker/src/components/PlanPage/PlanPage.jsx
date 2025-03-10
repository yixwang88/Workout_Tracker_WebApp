import { useState } from "react";
import Planner from "./Planner";
import TopBar from "./TopBar";
import AddPlanModal from "./AddPlanModal";

const PlanPage = function () {
    const [dateFilter, setDateFilter] = useState(new Date())
    const [modalOpen, setModalOpen] = useState(false)

    const toggleModal = () => {
      setModalOpen(!modalOpen)
    }

    return (
        <>
            {modalOpen && <AddPlanModal toggleModal={toggleModal} />}
            <div className="flex gap-4 box-border h-screen flex-col grow bg-[#FAFAFA] p-10">
                <TopBar date={dateFilter} onSetDate={setDateFilter} toggleModal={toggleModal} />
                <Planner dateFilter={dateFilter} />
            </div>
        </>
    )
}

export default PlanPage;