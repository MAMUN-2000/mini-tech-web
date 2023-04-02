import apiSlice from "../../api/apiSlice";

const studentAssignmentAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // getVideos: builder.query({
    //   query: (data) => ({
    //     url: "videos",
    //     method: "GET",
    //     body: data,
    //   }),
    // }),
    getStudentAssignment: builder.query({
      query: ({ id, data }) => ({
        url: `assignments/?video_id_like=${id}`,
        method: "GET",
        body: data,
      }),
      //   async onQueryStarted(arg, { queryFulfilled, dispatch }) {
      //     try {
      //       const result = await queryFulfilled;
      //       console.log(result);
      //       // const resultObj = {
      //       //   accessToken: result?.data?.accessToken,
      //       //   user: result?.data?.user,
      //       // };
      //       dispatch(getSingleV(result?.data));
      //     } catch (error) {
      //       console.log(error);
      //     }
      //   },
    }),
  }),
});

export const { useGetStudentAssignmentQuery } = studentAssignmentAPI;
