import apiSlice from "../../api/apiSlice";

const editVideoAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    updateVideo: builder.mutation({
      query: ({ data, id }) => ({
        url: `videos/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: ["Videos"],
    }),
  }),
});

export const { useUpdateVideoMutation } = editVideoAPI;
