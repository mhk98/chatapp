import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";


export const contactApi = createApi({
  reducerPath: "contactApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://cybercraft-backend-7r0v.onrender.com/api/v1/",
  }),

  endpoints: (build) => ({
    createContact: build.mutation({
      query: (data) => ({
        url: "/contact/create",
        method: "POST",
        body: data,
      }),
    }),


    
  }),
});

export const {
  useCreateContactMutation,

} = contactApi;