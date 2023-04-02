import apiSlice from "../../api/apiSlice";

const deleteVideoAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    deleteVideo: builder.mutation({
      query: (id) => ({
        url: `videos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Videos"],
    }),
  }),
});

export const { useDeleteVideoMutation } = deleteVideoAPI;
