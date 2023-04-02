import apiSlice from "../../api/apiSlice";

const adminVideosAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAdminVideos: builder.query({
      query: (data) => ({
        url: "/videos",
        method: "GET",
        body: data,
      }),
      providesTags: ["Videos"],
    }),
  }),
});

export const { useGetAdminVideosQuery } = adminVideosAPI;
