import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  quizzes: [],
  ans: [],
};

const studentquizzesSlice = createSlice({
  name: "student-quizz",
  initialState,
  reducers: {
    getQuiz(state, actions) {
      state.quizzes = actions.payload;
    },
    correctAns(state, action) {
      state.ans.push(action.payload);
    },
    deleteAns(state, action) {
      state.ans = state.ans.filter((i) => i.id !== action.payload.id);
    },
  },
});

export default studentquizzesSlice.reducer;
export const { getQuiz, correctAns, deleteAns } = studentquizzesSlice.actions;
