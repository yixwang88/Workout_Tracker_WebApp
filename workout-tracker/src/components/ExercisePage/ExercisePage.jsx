import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";
import RedirectLoginPage from "../RedirectLoginPage/RedirectLoginPage";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

// import { useSelector } from "react-redux";



const exerciseOptions = [
  "abductors", "abs", "adductors", "biceps", "calves", "cardiovascular system", "delts", "forearms", "glutes", "hamstrings", "lats", "levator scapulae", "pectorals", "quads", "serratus anterior", "spine", "traps", "triceps", "upper back"
];



const ExercisePage = (get) => {
  const location = useLocation();
  const getStarted = location.state?.target || "biceps";
  const data = useSelector((state) => state.auth)
  // const loaded = data.loaded
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth)
  const loggedIn = user?.email
  console.log(user.email);

  const [exercises, setExercises] = useState([]);
  const [search, setSearch] = useState(getStarted);
  const [input, setInput] = useState("");
  const [page, setPage] = useState(0);
  console.log("stae", getStarted)

  const fetchExercises = async () => {
    try {
      const response = await fetch(`https://cs342-pixel-panthers.onrender.com/api/exercise?search=${search}&page=${page}`);
      if (!response.ok) throw new Error("Failed to fetch exercises");

      const data = await response.json();
      setExercises(data);
      console.log(data);
    } catch (error) {
      console.log(error);
      //Add hot toast here
      setExercises({});
    }
  };

  useEffect(() => {
    fetchExercises();
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSearch(input);
    window.history.pushState(null, "", `?search=${search}`);
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const searchFromURL = queryParams.get("search");
    if (searchFromURL) {
      setSearch(searchFromURL);
    }
  }, []);

  const handleChange = (e) => {
    console.log(e.target.value);
    setInput(e.target.value);
  };

  return (
    <>
      {!loggedIn ? <RedirectLoginPage /> :
        <div className="min-h-screen w-full bg-(--bg-color)  py-10">
          <div className="mx-auto max-w-[1200px] px-6">
            {/* Search Bar */}
            <form onSubmit={handleSubmit} className="mb-5 flex items-center space-x-4">
              <label htmlFor="muscle" className="text-lg font-medium">Search Muscle:</label>
              <select
                id="muscle"
                value={input}
                onChange={handleChange}
                className="border p-2 rounded-md w-60 bg-(--bg-color)"
              >
                <option value="" className="bg-(--bg-color)">Select a muscle</option>
                {exerciseOptions.map((muscle) => (
                  <option key={muscle} value={muscle}>{muscle}</option>
                ))}
              </select>
              <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
                Search
              </button>
            </form>

            {/* Exercise Cards Grid */}
            <div className="flex flex-wrap gap-y-10">
              {exercises.length ? (
                exercises.map((exercise) => (
                  <div
                    key={exercise.name}
                    style={{"box-shadow": "0 0px 10px -2px rgba(0, 0, 0, 0.2)"}}
                    className="relative bg-(--bg-color) w-[33%] sm:w-[340px] h-[420px] rounded-2xl overflow-hidden p-6 mx-auto transition-transform hover:scale-105"
                  >
                    {/* Exercise Image */}
                    <div className="relative h-56">
                      <img
                        src={exercise.gifUrl || "/images/arm_leg_exercise.png"} // Use a fallback image if missing
                        alt={exercise.name}
                        className="w-full h-full object-cover opacity-90"
                      />
                      <div className="absolute inset-0 bg-(--bg-color) opacity-60"></div>
                    </div>

                    {/* Text Content */}
                    <div className="relative z-10 mt-4">
                      <h3 className="text-2xl font-bold text-(--text-color)">{exercise.name}</h3>
                      <p className="text-(--text-color) mt-1">Target: {exercise.target || "General"}</p>
                    </div>

                    {/* Get Started Button */}
                    <div className="relative z-10 mt-4">
                      <button
                        onClick={() => navigate(`/exercise/get-started`, { state: { exercise } })}
                        className="flex items-center space-x-2 text-(--text-color) font-medium hover:underline"
                      >
                        <span>Get Started</span>
                        <FaArrowRight />
                      </button>
                    </div>
                  </div>
                ))
              ) : (
                <p className="text-(--text-color) text-lg">No exercises found.</p>
              )}
            </div>
          </div>
        </div>
      }
    </>
  );
};

export default ExercisePage;
