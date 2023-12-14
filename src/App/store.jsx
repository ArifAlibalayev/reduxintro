import { configureStore } from '@reduxjs/toolkit'
import TodoHandle from '../Slices/TodoSlice'
import CalculatorHandle from '../Slices/CalculatorSlice'

export default configureStore({
  reducer: {
    counter: TodoHandle,
    counter: CalculatorHandle,
  },
})