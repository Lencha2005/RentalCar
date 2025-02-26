import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCarById, getCars } from "../../api/cars";

export const fetchCars = createAsyncThunk(
  "cars/getCars",
  async (page = 1, thunkApi) => {
    try {
      const data = await getCars(page);
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
