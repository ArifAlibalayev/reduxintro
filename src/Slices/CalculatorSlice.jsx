import { createSlice } from '@reduxjs/toolkit'

export const CalculatorSlice = createSlice({
  name: 'Calculator',
  initialState: {
    value: [],
  },
  reducers: {

    Plus: (state, action) => {
        state.value.push(action.payload)
        for (let i = 0; i < state.value.length; i++) {
            return 
        }

    },

}

  
})

export const {Plus} = CalculatorSlice.actions

export default CalculatorSlice.reducer    