import { createSlice } from '@reduxjs/toolkit'

export const foodSlice = createSlice({
  name: 'food',
  initialState: {
    value: [],
  },
  reducers: {
    addItem: (state, action) => {
      state.value.push(action.payload)
      localStorage.setItem('foods', JSON.stringify(state.value))
    },
    removeItem: (state, action) => {
      state.value = state.value.filter((item) => item.id !== action.payload)
      localStorage.setItem('foods', JSON.stringify(state.value))
    },
    getItem: (state) => {
      state.value = JSON.parse(localStorage.getItem('foods')) || []
    },
  },
})

export const { addItem, removeItem, getItem } = foodSlice.actions

export const selectFood = (state) => state.food.value
export default foodSlice.reducer