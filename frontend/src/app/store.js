import { configureStore } from "@reduxjs/toolkit";
import quizzReducer from "../features/admin/quizzes/quizzesSlice";
import apiSlice from "../features/api/apiSlice";
import authReducer from "../features/auth/authSlice";
import videosSlice from "../features/student/videos/videosSlice";
import studentquizzesSlice from "../features/student/quizzes/quizzesSlice";

export const store = configureStore({
  reducer: {
    [apiSlice.reducerPath]: apiSlice.reducer,
    auth: authReducer,
    quiz: quizzReducer,
    video: videosSlice,
    studentQuiz: studentquizzesSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});
