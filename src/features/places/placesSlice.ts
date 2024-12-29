import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Place {
  id: string;
  name: string;
  image: string;
  description: string;
}

interface PlacesState {
  places: Place[];
  visited: string[];
  randomPlace?: Place;
}

const initialState: PlacesState = {
  places: [],
  visited: [],
};

const placesSlice = createSlice({
  name: "places",
  initialState,
  reducers: {
    setPlaces: (state, action: PayloadAction<Place[]>) => {
      state.places = action.payload;
    },
    markVisited: (state, action: PayloadAction<string>) => {
      state.visited.push(action.payload);
    },
    unmarkVisited: (state, action: PayloadAction<string>) => {
      state.visited = state.visited.filter((id) => id !== action.payload);
    },
    setRandomPlace: (state) => {
      const randomIndex = Math.floor(Math.random() * state.places.length);
      state.randomPlace = state.places[randomIndex];
    },
  },
});

export const { setPlaces, markVisited, unmarkVisited, setRandomPlace } =
  placesSlice.actions;
export default placesSlice.reducer;
