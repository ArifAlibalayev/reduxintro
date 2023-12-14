import { createSlice } from '@reduxjs/toolkit'

export const TodoSlice = createSlice({
  name: 'Todo',
  initialState: {
    value: [],
  },
  reducers: {

    AddToDo: (state, action) => {
      state.value.push(action.payload)

    },

    plus: (state, action) => {
        state.value = state.value.filter((x)=>action.payload !== x.id)
      },
 
  },

  
})

export const { AddToDo, DeleteFromToDo } = TodoSlice.actions

export default TodoSlice.reducer    