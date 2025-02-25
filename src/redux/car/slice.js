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
  errror: null,
  selectedCars: null,
};

const carsSlice = createSlice({
  name: "cars",
  initialState: INITIAL_STATE,
  reducers: {
    setSelectedCars(state, action) {
      state.selectedCars = action.payload;
    },
  },
  extraReducers: (builder) => builder
  .addCase(fetchCars.pending, handlePending)
  .addCase(fetchCars.fulfilled, (state, action) => {
    state.isLoading = false,
    state.cars = action.payload;
  })
  .addCase(fetchCars.rejected, handleRejected)
  .addCase(fetchCarById.pending, handlePending)
  .addCase(fetchCarById.fulfilled, (state, action) => {
    state.isLoading = false,
    state.cars = action.payload;
  })
  .addCase(fetchCarById.rejected, handleRejected)
});

export const carsReducer = carsSlice.reducer;
export const { setSelectedCars } = carsSlice.actions;
