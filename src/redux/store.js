import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '@/redux/features/count'
import headerReducer from '@/redux/features/header'
export default configureStore({
  reducer: {
    counter: counterReducer,
    header: headerReducer,
  },
})