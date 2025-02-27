import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCarById, getCars } from "../../api/cars";

export const fetchCars = createAsyncThunk(
  "cars/getCars",
  async ({ page = 1, filters = {} }, thunkApi) => {
    try {
      const hasFilters =
        filters.brand || filters.rentalPrice || filters.mileage;
      const queryParams = hasFilters ? filters : {};
      
      const data = await getCars(page, 12, queryParams);
      return { cars: data.cars, totalPages: data.totalPages };
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);

export const fetchCarById = createAsyncThunk(
  "carId/getCarById",
  async (cardId, thunkApi) => {
    try {
      const data = await getCarById(cardId);
      return data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.message);
    }
  }
);
