import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";
import { Navigate, useNavigate } from "react-router-dom";



const exerci = [
  {
    title: "Arms Exercises",
    workouts: ["Bicep Curl", "Triceps Dips", "Hammer Curl", "Concentration Curl"],
    image: "/images/arm_leg_exercise.png",
  },
  {
    title: "Chest Exercises",
    workouts: ["Bench Press", "Push-Ups", "Chest Fly", "Incline Press"],
    image: "/images/chest_exercise.png",
  },
  {
    title: "Buttocks Exercises",
    workouts: ["Hip Thrust", "Glute Bridge", "Step-Ups"],
    image: "/images/buttocks_exercise.png",
  },
  {
    title: "Leg Exercises",
    workouts: ["Romanian Deadlift", "Lunges", "Leg Press", "Calf Raises"],
    image: "/images/arm_leg_exercise.png",
  },
  {
    title: "Cardio Exercises",
    workouts: ["Running", "Jump Rope", "Cycling", "Burpees"],
    image: "/images/cardio_exercise.png",
  },
];

import RedirectLoginPage from "../RedirectLoginPage/RedirectLoginPage";
import { useSelector } from "react-redux";

const ExercisePage = () => {
  const navigate = useNavigate();
  const { user } = useSelector((state) => state.auth)
  const loggedIn = user?.email

  const [exercises, setExercises] = useState([]);
  const [search, setSearch] = useState("biceps");
  const [input, setInput] = useState("");


  const fetchExercises = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/exercise?search=${search}`);
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
      {!loggedIn ? <RedirectLoginPage/> :
      <div className="min-h-screen w-full bg-gray-100 py-10">
        <div className="container mx-auto px-6">
          {/* Search Bar */}
          <form onSubmit={handleSubmit} className="mb-5 flex items-center space-x-4">
            <label htmlFor="muscle" className="text-lg font-medium">Search Muscle:</label>
            <input
              type="text"
              id="search"
              value={input}
              onChange={handleChange}
              placeholder="Enter muscle"
              className="border p-2 rounded-md w-60"
            />
            <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
              Search
            </button>
          </form>

          {/* Exercise Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {exercises.length? (
              exercises.map((exercise) => (
                <div
                  key={exercise.name}
                  className="relative bg-white w-full sm:w-[340px] h-[420px] rounded-2xl shadow-lg overflow-hidden p-6 mx-auto transition-transform hover:scale-105"
                >
                  {/* Exercise Image */}
                  <div className="relative h-56">
                    <img
                      src={exercise.gifUrl || "/images/arm_leg_exercise.png"} // Use a fallback image if missing
                      alt={exercise.name}
                      className="w-full h-full object-cover opacity-90"
                    />
                    <div className="absolute inset-0 bg-white opacity-60"></div>
                  </div>

                  {/* Text Content */}
                  <div className="relative z-10 mt-4">
                    <h3 className="text-2xl font-bold text-gray-900">{exercise.name}</h3>
                    <p className="text-gray-700 mt-1">Target: {exercise.target || "General"}</p>
                  </div>

                  {/* Get Started Button */}
                  <div className="relative z-10 mt-4">
                    <button
                      onClick={() => navigate(`/exercise/get-started`)}
                      className="flex items-center space-x-2 text-blue-600 font-medium hover:underline"
                    >
                      <span>Get Started</span>
                      <FaArrowRight />
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <p className="text-gray-600 text-lg">No exercises found.</p>
            )}
          </div>
        </div>
      </div>
      }
    </>
  );
};

export default ExercisePage;
