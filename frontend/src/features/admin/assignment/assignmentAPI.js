import apiSlice from "../../api/apiSlice";

const assignmentAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAssignment: builder.query({
      query: (data) => ({
        url: "assignments",
        method: "GET",
        body: data,
      }),
    }),
    addAssignment: builder.mutation({
      query: (data) => ({
        url: "assignments",
        method: "POST",
        body: data,
      }),
    }),
    editAssignment: builder.mutation({
      query: ({ data, id }) => ({
        url: `assignments/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteAssignment: builder.mutation({
      query: (id) => ({
        url: `assignments/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetAssignmentQuery,
  useAddAssignmentMutation,
  useEditAssignmentMutation,
  useDeleteAssignmentMutation,
} = assignmentAPI;
