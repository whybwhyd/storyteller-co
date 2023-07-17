import { configureStore } from '@reduxjs/toolkit'
import comment from '../modules/commentsSlice'
import board from '../modules/boardSlice'

const store = configureStore({
  reducer: { board: board, comment: comment },
})

export default store
