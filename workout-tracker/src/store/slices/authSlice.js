import { createSlice } from "@reduxjs/toolkit"

const initialUserState = {
  name: '',
  email: '',
  tasks: [],
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
      state.user.tasks.push(action.payload)
    },
    addCustomWorkout: (state, action) => {
      state.user.customWorkouts.push(action.payload)
    },
  }
})

export const {login, logout, loader, addTask, addCustomWorkout} = authSlice.actions

export default authSlice.reducer