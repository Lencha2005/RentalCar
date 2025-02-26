import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import CarCard from "../CarItem/CarItem";
import Button from "../ui/Button/Button";
import {
  selectCars,
  selectFavoriteCars,
  selectTotalPages,
} from "../../redux/car/selectors";
import { fetchCars } from "../../redux/car/operetions";
import { toggleFavoriteCar } from "../../redux/car/slice";
import css from "./CarsList.module.css";

const CarsList = () => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const cars = useSelector(selectCars);
  const favoriteCars = useSelector(selectFavoriteCars);
  const totalPages = useSelector(selectTotalPages);
  const uniqueCars = cars
    ? Array.from(new Map(cars.map((car) => [car.id, car])).values())
    : [];

  const handleToggleFavorite = (id) => {
    dispatch(toggleFavoriteCar(id));
  };

  useEffect(() => {
    dispatch(fetchCars(page));
  }, [dispatch, page]);

  const handleLoadMore = () => {
    setPage((prev) => prev + 1);
  };

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
      <ul className={css.list}>
        {uniqueCars.map((car) => {
          return (
            <li key={car.id} className={css.item}>
              <CarCard
                car={car}
                isFavorite={
                  Array.isArray(favoriteCars) && favoriteCars.includes(car.id)
                }
                onToggle={() => handleToggleFavorite(car.id)}
              />
            </li>
          );
        })}
      </ul>
      {page < totalPages && (
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
