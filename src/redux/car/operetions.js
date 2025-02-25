import { createAsyncThunk } from "@reduxjs/toolkit";
import { getCarById, getCars } from "../../api/cars";


export const fetchCars = createAsyncThunk(
    "cars/getCars",
    async (_, thunkApi) => {
        try {
            const data = await getCars();
            console.log('data: ', data);
            return data
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
            console.log('data: ', data);
            return data
        } catch (error) {
            return thunkApi.rejectWithValue(error.message);
        }
    }
)