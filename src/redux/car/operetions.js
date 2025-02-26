import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCarById, getCars } from "../../api/cars";

export const fetchCars = createAsyncThunk(
  "cars/getCars",
  async (_, thunkApi) => {
    try {
      const data = await getCars();
      return data.cars;
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
