import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const entertainmentApi = createApi({
  reducerPath: "entertainmentApi",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.themoviedb.org/3/" }),
  endpoints: (builder) => ({
    getTrendingData: builder.query({
      query: () =>
        `trending/all/day?language=en-US&page=1&api_key=${
          import.meta.env.VITE_API_KEY
        }`,
    }),
  }),
});

export const { useGetTrendingDataQuery } = entertainmentApi;
