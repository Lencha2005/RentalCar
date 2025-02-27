import { createSelector } from "@reduxjs/toolkit";
import {
  selectBrand,
  selectMileage,
  selectRentalPrice,
} from "../filter/selectors";

export const selectCars = (state) => state.cars.items;
export const selectSelectedCar = (state) => state.cars.selectedCar;
export const selectIsLoading = (state) => state.cars.isLoading;
export const selectError = (state) => state.cars.error;
export const selectFavoriteCars = (state) => state.cars.favoriteCars;
export const selectTotalPages = (state) => state.cars.totalPages;

export const selectFilteredCars = createSelector(
  [selectCars, selectBrand, selectRentalPrice, selectMileage],
  (cars, brand, price, mileage) => {
    if (!cars) return [];

    return cars.filter((car) => {
      const isBrandMatch = brand ? car.brand === brand : true;
      const isPriceMatch = price ? car.rentalPrice === price : true;

      let isMileageMatch = true;
      if (mileage) {
        const [mileageFrom, mileageTo] = mileage.split("-").map(Number);
        const carMileage = Number(car.mileage);
        isMileageMatch =
          (mileageFrom ? carMileage >= mileageFrom : true) &&
          (mileageTo ? carMileage >= mileageTo : true);
      }
      return isBrandMatch && isPriceMatch && isMileageMatch;
    });
  }
);
