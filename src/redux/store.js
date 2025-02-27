import { configureStore } from "@reduxjs/toolkit";
import { carsReducer } from "./car/slice";
import { filtersReducer } from "./filter/slice";


export const store = configureStore({
  reducer: {
    cars: carsReducer,
    filters: filtersReducer,
  },
});
