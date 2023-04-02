import apiSlice from "../../api/apiSlice";

const studentQuizzesAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getStudentQuizzes: builder.query({
      query: ({ data, id }) => ({
        url: `quizzes/?video_id_like=${id}`,
        method: "GET",
        body: data,
      }),
    }),
    // addQuiz: builder.mutation({
    //   query: (data) => ({
    //     url: "quizzes",
    //     method: "POST",
    //     body: data,
    //   }),
    // }),
    // editQuiz: builder.mutation({
    //   query: ({ data, id }) => ({
    //     url: `quizzes/${id}`,
    //     method: "PATCH",
    //     body: data,
    //   }),
    // }),
    // deleteQuiz: builder.mutation({
    //   query: (id) => ({
    //     url: `quizzes/${id}`,
    //     method: "DELETE",
    //   }),
    // }),
  }),
});

export const { useGetStudentQuizzesQuery } = studentQuizzesAPI;
