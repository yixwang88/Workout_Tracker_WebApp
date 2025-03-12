import { useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import RedirectLoginPage from "../RedirectLoginPage/RedirectLoginPage";

const GetStarted = (exercises) => {
    const location = useLocation();
    const { exercise } = location.state;
    const { user } = useSelector((state) => state.auth)
    const loggedIn = user?.email
    return (
        <>
            {!loggedIn ? <RedirectLoginPage /> :
                <div className="min-h-screen bg-gray-900 text-white">
                    <div className="bg-gray-100 text-black min-h-screen py-10">
                        <div className="container mx-auto px-6">
                            {/* Title */}
                            <h2 className="text-3xl font-bold text-center">{exercise.name}</h2>

                            <div className="mt-10 flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-12">
                                {/* Exercise Image */}
                                <div className="bg-white rounded-lg shadow-lg p-4">
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
                                <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-1/2 border border-gray-300">
                                    <h3 className="text-xl font-bold mb-2">Instructions:</h3>
                                    <p className="text-lg">
                                        {exercise.instructions.map((instruction) => (
                                            <li >{instruction}</li>
                                        ))}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
        </>
    );
}
export default GetStarted;