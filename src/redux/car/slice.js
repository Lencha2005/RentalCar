import { createSlice } from "@reduxjs/toolkit";
import { fetchBrands, fetchCarById, fetchCars } from "./operations";

const handlePending = (state) => {
  state.isLoading = true;
  state.error = null;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

// const savedFavorites = localStorage.getItem("favoriteCars");

const INITIAL_STATE = {
  items: [],
  brands: [],
  favoriteCars: [],
  selectedCar: null,
  page: 1,
  totalPages: null,
  isLoading: false,
  error: null,
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
      // localStorage.setItem("favoriteCars", JSON.stringify(state.favoriteCars));
    },
    setPage(state, action) {
      state.page = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchCars.pending, handlePending)
      .addCase(fetchCars.fulfilled, (state, action) => {
        state.isLoading = false;
        state.totalPages = action.payload.totalPages;
        if (action.meta.arg.page === 1) {
          state.items = [];
        }
        state.items = [...state.items, ...action.payload.cars];
      })
      .addCase(fetchCars.rejected, handleRejected)
      .addCase(fetchCarById.pending, handlePending)
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.selectedCar = action.payload;
      })
      .addCase(fetchCarById.rejected, handleRejected)
      .addCase(fetchBrands.pending, handlePending)
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.brands = action.payload;
        state.error = null;
      })
      .addCase(fetchBrands.rejected, handleRejected),
});

export const carsReducer = carsSlice.reducer;
export const { toggleFavoriteCar, setPage } = carsSlice.actions;
