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
      state = initialState
    },
    loader: (state, action) => {
      state.loaded = action.payload
    },
    addTask: (state, action) => {
      state.user.tasks.push(action.payload)
    },
  }
})

export const {login, logout, loader, addTask} = authSlice.actions

export default authSlice.reducer