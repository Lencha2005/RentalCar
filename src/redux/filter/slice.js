import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  filter: {
    brand: "",
    rentalPrice: "",
    minMileage: "",
    maxMileage: "",
  },
};

const filtersSlice = createSlice({
  name: "filters",
  initialState: INITIAL_STATE,
  reducers: {
    setFilter(state, action) {
      state.filter = {
        ...state.filter,
        ...action.payload,
      };
    },
    resetFilters(state) {
      state.filter = INITIAL_STATE.filter;
    },
  },
});

export const { resetFilters, setFilter } = filtersSlice.actions;
export const filtersReducer = filtersSlice.reducer;
