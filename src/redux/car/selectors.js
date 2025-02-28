import { createSelector } from "@reduxjs/toolkit";
import { selectMileage } from "../filter/selectors";

export const selectCars = (state) => state.cars.items;
export const selectSelectedCar = (state) => state.cars.selectedCar;
export const selectIsLoading = (state) => state.cars.isLoading;
export const selectError = (state) => state.cars.error;
export const selectFavoriteCars = (state) => state.cars.favoriteCars;
export const selectTotalPages = (state) => state.cars.totalPages;

export const selectFilteredCars = createSelector(
  [selectCars, selectMileage],
  (cars, mileage) => {
    if (!cars) return [];
    if (!mileage || (!mileage.from && !mileage.to)) return cars;

    const from = mileage.from ? Number(mileage.from) : 0;
    const to = mileage.to ? Number(mileage.to) : Infinity;

    return cars.filter((car) => {
      const carMileage = Number(car.mileage);
      return carMileage >= from && carMileage <= to;
    });
  }
);
