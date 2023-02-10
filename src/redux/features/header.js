import { createSlice } from '@reduxjs/toolkit'
import { useTranslation } from 'react-i18next'

export const headerSlice = createSlice({
  name: 'header',
  initialState: {
    leftIcon: '',
    title: '',
    rightContext: '',
  },
  reducers: {
    updateLeft: (state, action) => {
      state.leftIcon = action.payload
    },
    updateTitle: (state, action) => {
      state.title = action.payload
    },
    updateRight: (state, action) => {
      state.rightContext = action.payload
    },
    clearHeader: (state) => {
      const { t } = useTranslation()
      state.leftIcon = ''
      state.title = t('title')
      state.rightContext = ''
    },
  },
})

export const { updateLeft, updateTitle, updateRight, clearHeader } = headerSlice.actions

export const selectHeader = (state) => state.header
export default headerSlice.reducer