import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './Components/LoginCheck'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})