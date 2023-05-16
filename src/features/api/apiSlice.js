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
    getMoviesAndTvShows: builder.query({
      query: (page) =>
        `trending/all/day?language=en-US&page=${page}&api_key=${
          import.meta.env.VITE_API_KEY
        }`,
    }),
    getOnlyMovies: builder.query({
      query: (page) =>
        `trending/movie/day?language=en-US&page=${page}&api_key=${
          import.meta.env.VITE_API_KEY
        }`,
    }),
    getOnlyTvShows: builder.query({
      query: (page) =>
        `trending/tv/day?language=en-US&page=${page}&api_key=${
          import.meta.env.VITE_API_KEY
        }`,
    }),
  }),
});

export const {
  useGetTrendingDataQuery,
  useGetMoviesAndTvShowsQuery,
  useGetOnlyMoviesQuery,
  useGetOnlyTvShowsQuery,
} = entertainmentApi;
