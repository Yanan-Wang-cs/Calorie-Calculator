import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@/redux/features/count'
import foodReducer from '@/redux/features/food'
export default configureStore({
  reducer: {
    counter: counterReducer,
    food: foodReducer,
  },
})