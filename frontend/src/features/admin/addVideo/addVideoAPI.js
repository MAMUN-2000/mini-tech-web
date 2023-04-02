import apiSlice from "../../api/apiSlice";

const addVideoAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    addVideo: builder.mutation({
      query: (data) => ({
        url: "/videos",
        method: "POST",
        body: data,
      }),
    }),
  }),
});

export const { useAddVideoMutation } = addVideoAPI;
