import { configureStore } from '@reduxjs/toolkit'
import todoReducer from "../feature/todo/todo";

export const store = configureStore({
  reducer: todoReducer,
})