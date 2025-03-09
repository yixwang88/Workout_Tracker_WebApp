import React from "react";
import './LoginPage.css'
import { useState, useEffect } from "react";

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import toast, { Toaster } from "react-hot-toast"
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { login } from "../../store/slices/authSlice";

function LoginPage() {

  const loginFormSchema = z.object({
    email: z.string().email({ message: "Invalid email format" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" })
  })

  const signupFormSchema = z.object({
    name: z.string().min(1, { message: "Name is required" }),
    email: z.string().email({ message: "Invalid email format" }),
    password: z.string().min(6, { message: "Password must be at least 6 characters" })
  })

  const { register: loginRegister, handleSubmit: loginHandleSubmit, formState: { errors: loginErrors } } = useForm({
    resolver: zodResolver(loginFormSchema)
  })

  const { register: signupRegister, handleSubmit: signupHandleSubmit, formState: { errors: signupErrors } } = useForm({
    resolver: zodResolver(signupFormSchema)
  })

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [isLoading, setIsLoading] = useState(false)
  const [signupSide, setsignupSide] = useState(false)

  // Display validation errors sequentially via toast notifications
  useEffect(() => {
    const errorKeys = Object.keys(loginErrors);
    errorKeys.forEach((key, index) => {
      setTimeout(() => {
        toast.error(loginErrors[key].message);
      }, index * 500);
    });
  }, [loginErrors]);

  useEffect(() => {
    const errorKeys = Object.keys(signupErrors);
    errorKeys.forEach((key, index) => {
      setTimeout(() => {
        toast.error(signupErrors[key].message);
      }, index * 500);
    });
  }, [signupErrors]);

  const onLoginSubmit = async (data) => {
    try {
      setIsLoading(true)
      const res = await fetch('http://localhost:3000/api/login', {
        method: "POST",
        headers: { "Content-Type": "application/json"},
        body: JSON.stringify(data)
      })
      
      const resData = await res.json()
      if (res.ok) {
        dispatch(login(resData.user))
        toast.success("Login successful!")
        navigate('/account')
      } else {
        toast.error(resData.message)
      }
      
    } catch (error) {
      console.error("Login error:", error)
      toast.error("An error occurred during login. Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const onSignupSubmit = async (data) => {
    try {
      setIsLoading(true)
      let res = await fetch('http://localhost:3000/api/signup', {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)
      })

      if (res.ok) {
        toast.success("Signup successful. Please login.")
        localStorage.setItem("user", JSON.stringify(data))
        document.getElementById("signup-form").reset()
        setsignupSide(false)
      } else {
        const body = await res.json()
        toast.error(body.message)
      }
    } catch (error) {
      console.error("Signup error:", error);
      toast.error("An error occurred during signup. Please try again.")
    } finally {
      setIsLoading(false)
    }
  };

  return (
    <>
      <Toaster></Toaster>
      <div className="loginPage">
        <meta charSet="UTF-8" />
        <title> Login and Registration Form in HTML &amp; CSS | CodingLab </title>
        <link rel="stylesheet" href="style.css" />
        {/* Fontawesome CDN Link */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <div className="container">
          <input type="checkbox" id="flip" checked={signupSide} onChange={() => {}} />
          <div className="cover">
            <div className="front">
              <img className="frontImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTqEyFHvuFMAc-knprFmaQcUBLgB4bTxJwL9Q&s" alt="" />
              <div className="text">
                <span className="text-1">
                  Every new workout makes <br /> you stonger
                </span>
                <span className="text-2">Let's start</span>
              </div>
            </div>
            <div className="back">
              <img className="backImg" src="https://t4.ftcdn.net/jpg/01/79/81/77/360_F_179817756_QzTocli57q9G6a1Oe7kJtoMS5dNMU8cl.jpg" alt="" />
              <div className="text">
                <span className="text-1">
                  Complete miles of journey <br /> with one step
                </span>
                <span className="text-2">Let's get started</span>
              </div>
            </div>
          </div>
          <div className="forms">
            <div className="form-content">
              <div className="login-form">
                <div className="title">Login</div>
                <form onSubmit={loginHandleSubmit(onLoginSubmit)} id="login-form">
                  <div className="input-boxes">
                    <div className="input-box">
                      <i className="fas fa-envelope" />
                      <input
                        {...loginRegister("email")}
                        type="text"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="input-box">
                      <i className="fas fa-lock" />
                      <input
                        {...loginRegister("password")}
                        type="password"
                        placeholder="Enter your password"
                      />
                    </div>
                    <div className="text">
                      <a href="#">Forgot password?</a>
                    </div>
                    <div className="button input-box">
                      <input type="submit" defaultValue="Sumbit" disabled={isLoading} />
                    </div>
                    <div className="text sign-up-text">
                      Don't have an account?{" "}
                      <label htmlFor="flip" onClick={() => setsignupSide(!signupSide)}>Signup now</label>
                    </div>
                  </div>
                </form>
              </div>
              <div className="signup-form">
                <div className="title">Sign up</div>
                <form onSubmit={signupHandleSubmit(onSignupSubmit)} id="signup-form">
                  <div className="input-boxes">
                    <div className="input-box">
                      <i className="fas fa-user" />
                      <input {...signupRegister("name")} type="text" placeholder="Enter your name" />
                    </div>
                    <div className="input-box">
                      <i className="fas fa-envelope" />
                      <input
                        {...signupRegister("email")}
                        type="text"
                        placeholder="Enter your email"
                      />
                    </div>
                    <div className="input-box">
                      <i className="fas fa-lock" />
                      <input
                        {...signupRegister("password")}
                        type="password"
                        placeholder="Enter your password"
                      />
                    </div>
                    <div className="button input-box">
                      <input type="submit" defaultValue="Sumbit" disabled={isLoading} />
                    </div>
                    <div className="text sign-up-text">
                      Already have an account?{" "}
                      <label htmlFor="flip" onClick={() => setsignupSide(!signupSide)}>Login now</label>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginPage;
