import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBrands, getCarById, getCars } from "../../api/cars";

export const fetchCars = createAsyncThunk(
  "cars/getCars",
  async ({ page = 1, filters = {} }, thunkApi) => {
    try {
      const data = await getCars(page, 12, filters);
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

export const fetchBrands = createAsyncThunk(
  "filters/fetch",
  async (_, thunkAPI) => {
    try {
      const data = await getBrands();
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
