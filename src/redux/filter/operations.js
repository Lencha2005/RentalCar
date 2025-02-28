import { createAsyncThunk } from "@reduxjs/toolkit";
import { getBrands } from "../../api/cars";

export const fetchBrands = createAsyncThunk(
    'filters/fetch',
    async (_, thunkAPI) => {
      try {
        const data = await getBrands();
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  );