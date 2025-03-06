require("dotenv").config()
const express = require('express')
const cors = require('cors')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const PORT = process.env.PORT || 3000

const app = express()

app.use(cors())
app.use(express.json())

let userData = []

app.post('/api/signup', async (req, res) => {
  const { name, email, password } = req.body
  if (!name || !email || !password ) {
    return res.status(400).json({message: "All fields are required."})
  }
  if (userData.some(user => user.email == email)) {
    return res.status(400).json({message: "Email already in use"})
  }
  const hashedPass = await bcrypt.hash(password, 10)
  const newUser = {
    name,
    email,
    password: hashedPass
  }
  userData.push(newUser)
  return res.status(201).json({message: "Signup successful."})
})

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body
  if (!email || !password) {
    return res.status(400).json({message: "Email and password are required."})
  }
  const user = userData.find(user => user.email == email)
  if (!user) {
    return res.status(400).json({message: "User not found."})
  }
  const isMatch = await bcrypt.compare(password, user.password)
  if (!isMatch) {
    return res.status(401).json({message: "Invalid credentials"})
  }
  const accessToken = jwt.sign(
    {email},
    process.env.JWT_SECRET,
    {expiresIn: "1h"}
  )
  return res.status(200).json({
    message: "Login successful.",
    token: accessToken,
    user
  })
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})