import React from "react";
import { CiCirclePlus } from "react-icons/ci";
import { GiWeightLiftingUp } from "react-icons/gi";
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

function Navbar({homepage}) {

  const { user } = useSelector((state) => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const loggedIn = user?.email

  const handleLogin = () => {
    if (loggedIn) {
      navigate("/")
      dispatch(logout())
      localStorage.removeItem("user")
    } else {
      navigate("/login")
    }
  }

  console.log(user)

  const navigationLinks = [
    {
      name: 'Home',
      routerLink: '/' 
    },
    {
      name: 'Plan',
      routerLink: '/plan' 
    },
    {
      name: 'Stats',
      routerLink: '' 
    },
    {
      name: 'Exercises',
      routerLink: '/exercise' 
    },
    {
      name: 'Add Workout',
      routerLink: '/add-workout'
    }
  ]

  return (
    <div className="sticky top-0 bg-white">
      <div className="flex items-center justify-around max-w-7xl py-4 m-auto">
        <GiWeightLiftingUp className="w-12 h-12" />
        <ul className="flex gap-10">
          {navigationLinks.map((link) => (
            <Link to={link.routerLink} key={link.name}>
              <li className="px-6 py-2 hover:cursor-pointer font-semibold">
                {link.name}
              </li>
            </Link>))}
        </ul>

        <button onClick={handleLogin}>
          <div className="hover:cursor-pointer bg-neutral-800 text-white px-4 py-2 rounded-lg">
            {loggedIn ? 'Logout' : 'Login'}
          </div>
        </button>

      </div>
    </div>
  );
}

export default Navbar;