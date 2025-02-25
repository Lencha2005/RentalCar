import { createSlice } from "@reduxjs/toolkit";
import { fetchCarById, fetchCars } from "./operetions";

const handlePending = (state) => {
    state.isLoading = true;
    state.error = null;
  };
  
  const handleRejected = (state, action) => {
    state.isLoading = false;
    state.error = action.payload;
  };

const INITIAL_STATE = {
  items: null,
  isLoading: false,
  error: null,
  favoriteCars: [],
};

const carsSlice = createSlice({
  name: "cars",
  initialState: INITIAL_STATE,
  reducers: {
    toggleFavoriteCar(state, action) {
      const carId = action.payload;
      if (state.favoriteCars.includes(carId)) {
        state.favoriteCars = state.favoriteCars.filter((id) => id !== carId);
      } else {
        state.favoriteCars.push(carId);
      }
    },
    // setfavoriteCars(state, action) {
    //   state.favoriteCars = action.payload;
    // },
  },
  extraReducers: (builder) => builder
  .addCase(fetchCars.pending, handlePending)
  .addCase(fetchCars.fulfilled, (state, action) => {
    console.log("FETCH CARS PENDING");
    state.isLoading = false;
    state.items = action.payload;
  })
  .addCase(fetchCars.rejected, handleRejected)
  .addCase(fetchCarById.pending, handlePending)
  .addCase(fetchCarById.fulfilled, (state, action) => {
    state.isLoading = false;
    state.items = action.payload;
  })
  .addCase(fetchCarById.rejected, handleRejected)
});

export const carsReducer = carsSlice.reducer;
export const { toggleFavoriteCar } = carsSlice.actions;
