import React, { useState, useEffect } from "react";
import { FaArrowRight } from "react-icons/fa";



const exercises = [
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


const ExercisePage = () => {
  const [exercises, setExercises] = useState([]);
  const [search, setSearch] = useState("biceps");
  const fetchExercises = async () => {
    try {
      const response = await fetch(`http://localhost:3000/api/exercise?search=${search}`);
      if (!response.ok) throw new Error("Failed to fetch exercises");

      const data = await response.json();
      setExercises(data.data);
      console.log(data);

    } catch (error) {
      console.log(error);

    }
  };
  useEffect(() => {
    fetchExercises();
  }, [search]);

  const handleSubmit = (e) => {
    e.preventDefault();
    window.history.pushState(null, '', `?search=${search}`);
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(window.location.search);
    const searchFromURL = queryParams.get('search');
    if (searchFromURL) {
      setSearch(searchFromURL); 
    }
  }, []);
  const handleChange = (e) => {
    console.log(e.target.value);
    setSearch(e.target.value); 
  };
  return (
    <>
      <div className="min-h-screen bg-gray-100">
        {/* White Background for Content */}
        <div className="bg-white py-10">
          <div className="container mx-auto px-5">
            <form onSubmit={handleSubmit} className="mb-5">
              <label htmlFor="muscle">Search Muscle: </label>
              <input
                type="text"
                id="search"
                value={search}
                onChange={handleChange}
                placeholder="Enter muscle"
                className="border p-2"
              />
              <button type="submit" className="ml-2 px-4 py-2 bg-blue-500 text-white">Search</button>
            </form>

            {/* Exercise Cards Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {exercises.length > 0 ? (
              exercises.map((exercise) => (
                <div
                  key={exercise.exerciseId}
                  className="relative bg-white w-[413px] h-[413px] rounded-xl shadow-lg overflow-hidden p-6"
                >
                  {/* Exercise Image */}
                  <img
                    src={exercise.image} // To Do: Add default image
                    alt={exercise.title} // 
                    className="absolute left-[96px] top-[24px] w-[468px] h-[526px] object-cover opacity-80"
                  />
                  {/* Exercise Title */}
                  <div className="absolute left-[21px] top-[20px] text-black text-2xl font-bold">
                    <h3>{exercise.name}</h3>
                  </div>
                </div>
              ))
              ) : (
                <p>No exercises found.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ExercisePage;
