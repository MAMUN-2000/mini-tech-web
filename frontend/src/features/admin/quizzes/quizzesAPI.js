import apiSlice from "../../api/apiSlice";

const quizzesAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getQuizzes: builder.query({
      query: (data) => ({
        url: "quizzes",
        method: "GET",
        body: data,
      }),
    }),
    addQuiz: builder.mutation({
      query: (data) => ({
        url: "quizzes",
        method: "POST",
        body: data,
      }),
    }),
    editQuiz: builder.mutation({
      query: ({ data, id }) => ({
        url: `quizzes/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteQuiz: builder.mutation({
      query: (id) => ({
        url: `quizzes/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddQuizMutation,
  useDeleteQuizMutation,
  useEditQuizMutation,
  useGetQuizzesQuery,
} = quizzesAPI;
