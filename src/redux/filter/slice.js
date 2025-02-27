import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  // filter: "",
  brand: "",
  rentalPrice: null,
  mileage: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: INITIAL_STATE,
  reducers: {
    setBrand(state, action) {
      state.brand = action.payload;
    },
    setPrice(state, action) {
      state.rentalPrice = action.payload;
    },
    setMileage(state, action) {
      state.mileage = action.payload;
    },
    resetFilters(state) {
      state.brand = "";
      state.rentalPrice = null;
      state.mileage = "";
    }
    // changeFilter(state, action) {
    //   state.filter = action.payload;
    // },
  },
});

export const {setBrand, setPrice, setMileage, resetFilters} = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
// export const { changeFilter } = filtersSlice.actions;
