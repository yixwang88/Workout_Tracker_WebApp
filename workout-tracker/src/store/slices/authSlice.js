import { createSlice } from "@reduxjs/toolkit"

const initialUserState = {
  name: '',
  email: '',
}

const initialState = {
  user: initialUserState,
  loaded: false
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload
      state.loaded = true
    },
    logout: (state, action) => {
      state.user = initialUserState
    },
    loader: (state, action) => {
      state.loaded = action.payload
    },
    addTask: (state, action) => {
      state.user.user.tasks.push(action.payload)
    },
  }
})

export const {login, logout, loader, addTask} = authSlice.actions

export default authSlice.reducer