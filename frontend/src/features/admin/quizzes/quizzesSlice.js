import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizOptions: [],
  singleQuiz: {},
};

const quizzesSlice = createSlice({
  name: "quizz",
  initialState,
  reducers: {
    addQuizOption(state, action) {
      state.quizOptions.push({
        ...action.payload,
        id: state.quizOptions?.length + 1,
      });
    },
    clearQuizOptions(state, action) {
      state.quizOptions = [];
    },
    getSingleQuiz(state, actions) {
      state.singleQuiz = actions.payload;
    },
  },
});

export default quizzesSlice.reducer;
export const { addQuizOption, clearQuizOptions, getSingleQuiz } =
  quizzesSlice.actions;
