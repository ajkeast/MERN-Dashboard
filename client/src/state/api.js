import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
    // baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_BASE_URL }),
    baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5001" }),
    reducerPath: "adminApi",
    tagTypes: ["Score","Firsts"],
    endpoints: (build) => ({
        getFirsts: build.query({
            query: (limit) => `client/firsts/${limit}`,
            providesTags: ["Firsts"],
        }),
        getScore: build.query({
            query: () => "client/score",
            providesTags:  ["Score"]
        })
    })
})

export const { useGetFirstsQuery, useGetScoreQuery } = api