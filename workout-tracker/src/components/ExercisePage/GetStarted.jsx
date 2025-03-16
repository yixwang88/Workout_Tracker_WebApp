import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import RedirectLoginPage from "../RedirectLoginPage/RedirectLoginPage";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";


const GetStarted = (exercises) => {
    const navigate = useNavigate();
    const location = useLocation();
    const { exercise } = location.state;
    const { user } = useSelector((state) => state.auth)
    const loggedIn = user?.email
    return (
        <>
            {!loggedIn ? <RedirectLoginPage /> :
                <div className="min-h-screen bg-(--bg-color) text-(--text-color)">
                    <div className="bg-(--bg-color) bg-opacity-30 text-(--text-color) min-h-screen py-10">
                        <div className="container mx-auto px-6">
                            {/* Title */}
                            <h2 className="text-3xl font-bold text-center">{exercise.name}</h2>

                            <div className="mt-10 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-12">
                                {/* Exercise Image */}
                                <div className="bg-(--bg-color) rounded-lg shadow-lg p-4">
                                    <img
                                        src={exercise.gifUrl} // Replace with actual exercise image
                                        // alt="Bench Press" 
                                        className="rounded-md grayscale"
                                    />
                                    <p className="mt-4 text-lg"><strong>Primary Target: </strong>{exercise.target}</p>
                                    <p className="text-lg"><strong>Secondary Target: </strong> {exercise.secondaryMuscles.map((instruction) => (
                                        <ul >{instruction}</ul>
                                    ))}</p>
                                </div>

                                {/* Instructions Box */}
                                <div className="bg-(--bg-color) shadow-lg rounded-lg p-6 w-full md:w-1/2 border border-gray-300">
                                    <h3 className="text-xl font-bold mb-2">Instructions:</h3>
                                    <p className="text-lg">
                                        {exercise.instructions.map((instruction) => (
                                            <li >{instruction}</li>
                                        ))}
                                    </p>
                                </div>
                                
                            </div>
                            <button
                                    onClick={() => navigate(`/exercise`, { state: { target: exercise.target } })}
                                    className="flex items-center space-x-2 text-blue-600 font-medium hover:underline"
                                >
                                    <span>Back to Exercises</span>
                                    <FaArrowRight />
                                </button>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}
export default GetStarted;