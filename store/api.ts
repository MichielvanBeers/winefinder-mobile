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
        "Token 70574d887b0644a0936e07ddb1869762318b8e25"
      );
      return headers;
    },
  }),
  tagTypes: ["Wine"],
  endpoints: (builder) => ({
    getAllWines: builder.query<Wine[], void>({
      query: () => "/wines",
    }),
    addWine: builder.mutation<Wine, Omit<Wine, "id">>({
      query(body) {
        return {
          url: "/wines/",
          method: "POST",
          body: {
            ...body,
            grape: [],
            type: [],
            tag: [],
            food: [],
            region: [],
            allergen: [],
            received_from: [],
            date_added: null,
            archived: false,
            archived_date: null,
            year: null,
            price: null,
            score: null,
            country: null,
            image: null,
            drank_image: null,
          },
        };
      },
    }),
  }),
});

export const { useLazyGetAllWinesQuery, useAddWineMutation } = wineApi;
