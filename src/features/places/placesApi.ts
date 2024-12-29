import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export interface Place {
  id: string;
  name: string;
  image: string;
  description: string;
}

export const placesApi = createApi({
  reducerPath: "placesApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/" }),
  endpoints: (builder) => ({
    getPlaces: builder.query<Place[], void>({
      query: () => "places",
    }),
  }),
});

export const { useGetPlacesQuery } = placesApi;
