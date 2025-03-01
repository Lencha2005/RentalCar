import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import {
  selectError,
  selectFavoriteCars,
  selectFilteredCars,
  selectIsLoading,
  selectTotalPages,
} from "../../redux/car/selectors";
import { selectMileage } from "../../redux/filter/selectors";
import { fetchCars } from "../../redux/car/operations";
import { toggleFavoriteCar } from "../../redux/car/slice";
import CarCard from "../CarItem/CarItem";
import Button from "../ui/Button/Button";
import FilterForm from "../FilterForm/FilterForm";
import css from "./CarsList.module.css";

const CarsList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const [filters, setFilters] = useState({});

  const cars = useSelector(selectFilteredCars);
  const favoriteCars = useSelector(selectFavoriteCars);
  const totalPages = useSelector(selectTotalPages);
  const mileage = useSelector(selectMileage);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  const uniqueCars = cars
    ? Array.from(new Map(cars.map((car) => [car.id, car])).values())
    : [];

  const handleToggleFavorite = (id) => {
    dispatch(toggleFavoriteCar(id));
  };

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

  const handleFilter = (newFilters) => {
    setFilters(newFilters);
    setPage(1);
    dispatch(fetchCars({ page: 1, filters: newFilters }));
  };

  useEffect(() => {
    const fullFilters = { ...filters, mileage };
    dispatch(fetchCars({ page, filters: fullFilters }));
  }, [dispatch, page, filters, mileage]);

  useEffect(() => {
    if (page > 1) {
      window.scrollBy({
        top: window.innerHeight,
        behavior: "smooth",
      });
    }
  }, [cars]);

  return (
    <div className={css.wrapper}>
      <FilterForm onFilter={handleFilter} />
      <ul className={css.list}>
        {error ? (
          <p className={css.errorMessage}>
            Something went wrong. Please try again.
          </p>
        ) : isLoading ? (
          <></>
        ) : uniqueCars.length > 0 ? (
          uniqueCars.map((car) => (
            <li key={car.id} className={css.item}>
              <CarCard
                car={car}
                isFavorite={
                  Array.isArray(favoriteCars) && favoriteCars.includes(car.id)
                }
                onToggle={() => handleToggleFavorite(car.id)}
              />
            </li>
          ))
        ) : (
          <p className={css.errorMessage}>
            No cars found. Try changing the filters.
          </p>
        )}
      </ul>
      {!isLoading && uniqueCars.length > 0 && page < totalPages && (
        <Button
          className={css.btnLoadMore}
          variant="loadmore"
          type="button"
          onClick={handleLoadMore}
        >
          Load more
        </Button>
      )}
    </div>
  );
};

export default CarsList;
