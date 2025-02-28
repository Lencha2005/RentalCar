import { createSlice } from "@reduxjs/toolkit";
import { fetchBrands } from "./operations";

const INITIAL_STATE = {
  brands: [],
  brand: null,
  rentalPrice: null,
  mileage: { from: null, to: null },
  error: null,
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: INITIAL_STATE,
  reducers: {
    setBrand(state, action) {
      state.brand = action.payload;
    },
    setRentalPrice(state, action) {
      state.rentalPrice = action.payload;
    },
    setMileage(state, action) {
      state.mileage = action.payload;
    },
  },
  extraReducers: (builder) =>
    builder
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.brands = action.payload;
        state.error = null;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.error = action.payload;
      }),
});

export const { setMileage, setBrand, setRentalPrice } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
