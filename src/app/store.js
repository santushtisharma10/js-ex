import { configureStore } from '@reduxjs/toolkit'
import quizReducer from "../features/quiz"

export default configureStore({

    reducer: {
        quiz: quizReducer,
    },
})