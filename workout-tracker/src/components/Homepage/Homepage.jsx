import React from "react"
import { FaArrowRightLong } from "react-icons/fa6";
import { FaDumbbell } from "react-icons/fa6";
import { TbTreadmill } from "react-icons/tb";

function Homepage() {

  const detailCards = [
    {
      icon: (<FaDumbbell className="w-6 h-6" />),
      title: "Personalized Fitness Plans",
      text: "Set customized workout routines tailored to your fitness level and goals. Track your exercises, sets, reps, and progress in real-time."
    },
    {
      icon: (<TbTreadmill className="w-6 h-6" />),
      title: "Modern Equipment",
      text: "We can track any kind of workout exercises - from endurance to strength, we have you covered."
    },
    {
      icon: (<FaDumbbell className="w-6 h-6" />),
      title: "Progress Tracking & Analytics",
      text: "Visualize your improvement with detailed statistics and charts. Stay motivated by hitting milestones and breaking personal records."
    }
  ]

  const programCards = [
    {
      imgSrc: "/homepage/programs-1.jpg",
      title: "Cardio & Endurance",
      text: "Log your running, cycling, and other endurance workouts to improve stamina."
    },
    {
      imgSrc: "/homepage//programs-2.jpg",
      title: "Flexibility & Mobility",
      text: "Follow yoga and stretching routines to enhance flexibility and prevent injuries."
    },
    {
      imgSrc: "/homepage//programs-3.jpg",
      title: "Strength Training",
      text: "Monitor your lifts, progressively overload, and track gains over time."
    }
  ]

  return (
    <>
      <div>
        <div className="flex items-center text-white h-[500px] bg-cover bg-no-repeat bg-center" style={{ backgroundImage: "url(/homepage/header.jpg" }}>
          <div className="w-[87.5%] m-auto flex flex-col gap-5">
            <h1 className="text-7xl font-bold">Think Less,</h1>
            <h1 className="text-7xl font-bold">Lift More!</h1>
            <p>Transform your body and mind through the power of fitness.</p>
            <button className="w-fit p-4 flex items-center gap-4 hover:cursor-pointer">
              <p>Join Now</p>
              <FaArrowRightLong />
            </button>
          </div>
        </div>

        <div className="w-[87.5%] mx-auto mt-20">
          <h2 className="text-5xl font-semibold text-center">Why Choose Us</h2>
          <p className="text-center mt-4 mb-20">Tracking your fitness journey has never been easier. Our workout tracker helps you stay on top of your goals, monitor progress, and maintain consistency. Whether you're a beginner or a seasoned athlete, our tool is designed to optimize your workouts and enhance your performance.</p>
          <div className="grid grid-cols-[2fr_1fr]">
            <ul className="flex flex-wrap">
              {detailCards.map((card, i) => (
                <div className="w-1/2 flex flex-col gap-2 flex-none p-5" key={i}>
                  <div className="flex items-center justify-center rounded-full bg-stone-100 w-10 h-10">
                    {card.icon}
                  </div>
                  <h3 className="font-semibold text-xl">{card.title}</h3>
                  <p className="text-stone-500">{card.text}</p>
                </div>))}
            </ul>
            <div>
              <img className="object-cover h-full" src="/homepage//details-img.jpg" />
            </div>
          </div>
        </div>

        <div className="w-[87.5%] mx-auto my-40">
          <h2 className="text-5xl font-semibold text-center">Our Programs</h2>
          <p className="text-center mt-4 mb-20">Unlock powerful tools to take your fitness to the next level. Our workout tracker offers various training programs designed to suit different fitness preferences.</p>
          <ul className="grid grid-cols-[1fr_1fr_1fr] gap-4">
            {programCards.map((card, i) => (
              <div className="flex flex-col gap-2" key={i}>
                <img src={card.imgSrc} className="h-[400px] object-cover" />
                <h3 className="text-xl font-semibold">{card.title}</h3>
                <p className="text-stone-500">{card.text}</p>
              </div>))}
          </ul>
        </div>
        {/* <ContactPageHeader /> */}
        {/* <Footer /> */}
      </div>
    </>
  )
}

export default Homepage