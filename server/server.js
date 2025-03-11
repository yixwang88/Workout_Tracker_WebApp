require("dotenv").config();
const express = require('express');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(cors());
app.use(express.json());

// Create connection to the database
mongoose.connect(process.env.DATABASE_URL)
.then(()=> console.log("Connected to MongoDB...")) //if there is a connection
.catch((error)=> console.error("Could not connect to MongoDB...", error)); //if there is no connection

// Define the user schema and model
const workoutSchema = new mongoose.Schema({
  title: {type: String, required: true},
  workoutInfo: {type: String, required: true},
  status: {
    type: String,
    enum: ['incomplete', 'complete', 'failed'],
    required: true,
    default: 'incomplete',
  }
})

const taskSchema = new mongoose.Schema({
  title: {type: String, required: true},
  date: {type: Date, required: true},
  workouts: [workoutSchema],
})

const userSchema = new mongoose.Schema({
  email: {type: String, required: true, unique: true},
  name: {type: String, required: true},
  password: {type: String, required: true},
  tasks: [taskSchema],
});

// Password validation utility function
function validatePassword(password) {
  const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
  return regex.test(password);
}

// Create the user model
const User = mongoose.model("User", userSchema);

app.post('/api/signup', async (req, res) => {
  const { name, email, password } = req.body;
  if (!name || !email || !password ) {
    return res.status(400).json({message: "All fields are required."});
  }
  try {
    // Attempt to find an existing user with the same email
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({message: "Email already in use."});
    }
    // Validate the password
    if (!validatePassword(password)) {
      return res.status(400).json({message: "Password must be at least 6 characters long and contain at least one letter and one number."});
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = new User({ name, email, password: hashedPassword });
    await newUser.save();
    return res.status(201).json({message: "Signup successful."});
  } catch (err) {
    return res.status(500).json({ message: err.message || "Error while signup." });
  }
})

app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({message: "Email and password are required."});
  }
  try {
    const user = await User.findOne({email}); 
    if (!user) {
      return res.status(400).json({message: "User not found."});
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({message: "Invalid credentials."});
    }
    const token = jwt.sign({ id: user.email }, process.env.JWT_SECRET, { expiresIn: "1h" });
    return res.status(200).json({ message: "Login successful.", token, user});
  } catch (err) {
    return res.status(500).json({ message: "Error finding user." });
  }
})

app.post('/api/create_task', async (req, res) => {
  const { token, task } = req

  try {
    const { email } = jwt.verify(token, process.env.JWT_SECRET)
  }
  catch(error) {
    return res.status(401).json({ message: "Invalid token." })
  }

  const user = User.findOne({ "email": email })

  user.tasks.push(task)
  await user.save()
})

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})