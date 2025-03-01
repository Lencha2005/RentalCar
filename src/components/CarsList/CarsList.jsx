import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import {
  selectCars,
  selectError,
  selectFavoriteCars,
  selectIsLoading,
  selectPage,
  selectTotalPages,
} from "../../redux/car/selectors";
import { fetchCars } from "../../redux/car/operations";
import { setPage, toggleFavoriteCar } from "../../redux/car/slice";
import CarCard from "../CarItem/CarItem";
import Button from "../ui/Button/Button";
import FilterForm from "../FilterForm/FilterForm";
import css from "./CarsList.module.css";
import { useLocation } from "react-router-dom";
import { selectFilter } from "../../redux/filter/selectors";

const CarsList = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const page = useSelector(selectPage);
  const filters = useSelector(selectFilter);
  const cars = useSelector(selectCars);
  const favoriteCars = useSelector(selectFavoriteCars);
  const totalPages = useSelector(selectTotalPages);
  const error = useSelector(selectError);
  const isLoading = useSelector(selectIsLoading);

  useEffect(() => {
    if (location.pathname === "/catalog") {
      dispatch(fetchCars({ page, filters }));
    }
  }, [dispatch, page, filters, location.pathname]);

  const uniqueCars = Array.from(
    new Map(cars.map((car) => [car.id, car])).values()
  );

  const handleToggleFavorite = (id) => {
    dispatch(toggleFavoriteCar(id));
  };

  const handleLoadMore = () => {
    if (page < totalPages) {
      dispatch(setPage(page + 1));
    }
  };

  useEffect(() => {
    if (page > 1) {
      const cardHeight = 276;
      const rows = 2;
      const gap = 90;
      window.scrollBy({
        top: cardHeight * rows + gap,
        behavior: "smooth",
      });
    }
  }, [cars]);

  return (
    <div className={css.wrapper}>
      <FilterForm />
      <ul className={css.list}>
        {!error && isLoading && page === 1 ? (
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
      {!isLoading && !error && uniqueCars.length > 0 && page < totalPages && (
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
