import { createSlice } from "@reduxjs/toolkit"

const initialUserState = {
  name: '',
  email: '',
  tasks: [],
  customWorkouts: [],
  workouts: [],
  currentTaskId: ""
}

const initialState = {
  user: initialUserState,
  token: "",
  loaded: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.token
      state.loaded = true
    },
    logout: (state, action) => {
      state.user = initialUserState
      state.token = ""
      state.loaded = false
    },
    loader: (state, action) => {
      state.loaded = action.payload
    },
    addTask: (state, action) => {
      state.user.tasks = action.payload
    },
    addCustomWorkout: (state, action) => {
      state.user.customWorkouts = action.payload
    },
    deleteCustomWorkout: (state, action) => {
      state.user.customWorkouts = state.user.customWorkouts.filter(workout => workout._id !== action.payload)
    },
    setCurrentTaskId: (state, action) => {
      state.user.currentTaskId = action.payload
    }
  }
})

export const {login, logout, loader, addTask, addCustomWorkout, deleteCustomWorkout, setCurrentTaskId} = authSlice.actions

export default authSlice.reducer