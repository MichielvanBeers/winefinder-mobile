// Redux Toolkit
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Wine type
import { Wine } from "./wine.interface";

const BACKEND_BASE_URL = "http://192.168.1.184:9000/";

export const wineApi = createApi({
  reducerPath: "wineApi",
  baseQuery: fetchBaseQuery({
    baseUrl: BACKEND_BASE_URL,
    // Todo: add getState to retrieve token & base url from store: https://redux-toolkit.js.org/rtk-query/api/fetchBaseQuery
    prepareHeaders: (headers) => {
      headers.set(
        "Authorization",
        "Token 70574d887b0644a0936e07ddb1869762318b8e25",
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getAllWines: builder.query<Wine[], void>({
      query: () => "/wines",
    }),
  }),
});

export const { useLazyGetAllWinesQuery } = wineApi;