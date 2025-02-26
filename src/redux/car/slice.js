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
  selectedCar: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState: INITIAL_STATE,
  reducers: {
    toggleFavoriteCar(state, action) {
      const carId = action.payload;
      const index = state.favoriteCars.indexOf(carId);
      if (index !== -1) {
        state.favoriteCars.splice(index, 1);
      } else {
        state.favoriteCars.push(carId);
      }
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.items = action.payload;
      })
      .addCase(fetchCars.rejected, handleRejected)
      .addCase(fetchCarById.pending, handlePending)
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedCar = action.payload;
      })
      .addCase(fetchCarById.rejected, handleRejected),
});

export const carsReducer = carsSlice.reducer;
export const { toggleFavoriteCar } = carsSlice.actions;
