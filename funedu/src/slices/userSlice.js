import { createSlice } from '@reduxjs/toolkit'


const defaultUser = {
  userId: null,
  userName: '',
  login: '',
  avatar: '',
  roles: null,
  createdOn: null
}

Object.freeze(defaultUser);

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    value: defaultUser,
  },
  reducers: {
    populateUser: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      console.log("action : " + JSON.stringify(action))
      Object.assign(state.value, action.payload)
      console.log("state.value" + JSON.stringify(state.value))
      
    },
    resetUser: (state) => {
      console.log("resetUser : " + JSON.stringify(defaultUser))
      Object.assign(state.value, defaultUser)
      console.log("state.value" + JSON.stringify(state.value))
      
    },
    // decrement: (state) => {
    //   state.value -= 1
    // },
    // incrementByAmount: (state, action) => {
    //   state.value += action.payload
    // },
  },
})

// Action creators are generated for each case reducer function
export const { populateUser, resetUser } = userSlice.actions

export default userSlice.reducer