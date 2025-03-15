import { useState } from "react";
import Planner from "./Planner";
import TopBar from "./TopBar";
import AddPlanModal from "./AddPlanModal";
import RedirectLoginPage from "../RedirectLoginPage/RedirectLoginPage";
import { useSelector } from "react-redux";

const PlanPage = function () {
    const [dateFilter, setDateFilter] = useState(new Date())
    const [modalOpen, setModalOpen] = useState(false)

    const data = useSelector((state) => state.auth)
    const loaded = data.loaded

    const toggleModal = () => {
      setModalOpen(!modalOpen)
    }

    return<>
        {!loaded ? <RedirectLoginPage/> :<>
            {modalOpen && <AddPlanModal toggleModal={toggleModal} />}
            <div className="flex gap-4 box-border h-screen flex-col grow bg-(--bg-color) p-10">
                <TopBar date={dateFilter} onSetDate={setDateFilter} toggleModal={toggleModal} />
                <Planner date={dateFilter} />
            </div>
        </>
        }
    </>
}

export default PlanPage;