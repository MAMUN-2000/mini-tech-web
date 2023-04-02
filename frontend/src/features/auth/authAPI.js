import apiSlice from "../api/apiSlice";
import { userLoggedIn } from "./authSlice";

const authAPI = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    studentLogin: builder.mutation({
      query: (data) => ({
        url: "login",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          const resultObj = {
            accessToken: result?.data?.accessToken,
            user: result?.data?.user,
          };
          localStorage.setItem("auth", JSON.stringify(resultObj));
          dispatch(userLoggedIn(resultObj));
        } catch (err) {
          console.log(err);
        }
      },
    }),
    studentRegistration: builder.mutation({
      query: (data) => ({
        url: "users",
        method: "POST",
        body: data,
      }),
      async onQueryStarted(arg, { queryFulfilled, dispatch }) {
        try {
          const result = await queryFulfilled;
          const resultObj = {
            accessToken: result?.data?.accessToken,
            user: result?.data?.user,
          };
          localStorage.setItem("auth", JSON.stringify(resultObj));
          dispatch(userLoggedIn(resultObj));
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});
export const { useStudentLoginMutation, useStudentRegistrationMutation } =
  authAPI;
