import apiSlice from "../../api/apiSlice";

const assignmentMarkAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAssignmentMarks: builder.query({
      query: (data) => ({
        url: "assignmentMark",
        method: "GET",
        body: data,
      }),
    }),
    addAssignmentMark: builder.mutation({
      query: (data) => ({
        url: "assignmentMark",
        method: "POST",
        body: data,
      }),
    }),
    updateAssignmentMark: builder.mutation({
      query: ({ data, id }) => ({
        url: `assignmentMark/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteAssignmentMark: builder.mutation({
      query: (id) => ({
        url: `assignmentMark/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useAddAssignmentMarkMutation,
  useDeleteAssignmentMarkMutation,
  useGetAssignmentMarksQuery,
  useUpdateAssignmentMarkMutation,
} = assignmentMarkAPI;
