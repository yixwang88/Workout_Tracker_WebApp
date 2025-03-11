import React from "react";
import lift from './lift.png'
import { Link } from 'react-router-dom';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/authSlice";
import { useNavigate } from "react-router-dom";

function Navbar() {

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
      name: 'Exercises',
      routerLink: '/exercise' 
    },
    {
      name: 'Workouts',
      routerLink: '/add-workout'
    }
  ]

  return (
    <div className="sticky top-0 bg-white">
      <div className="flex items-center justify-around max-w-7xl py-4 m-auto">
        <img
          className="shrink-0 w-[59px] h-[52px] relative"
          style={{ objectFit: "cover" }}
          src={lift}
        />
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