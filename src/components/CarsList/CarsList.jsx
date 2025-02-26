import { useDispatch, useSelector } from "react-redux";
import { selectCars, selectFavoriteCars } from "../../redux/car/selectors";

import CarCard from "../CarItem/CarItem";
import { useEffect } from "react";
import { fetchCars } from "../../redux/car/operetions";
import css from "./CarsList.module.css";
import Container from "../ui/Container/Container";
import { toggleFavoriteCar } from "../../redux/car/slice";

const CarsList = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);
  const favoriteCars = useSelector(selectFavoriteCars);

  const handleToggleFavorite = (id) => {
    dispatch(toggleFavoriteCar(id));
  };

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);
console.log("favoriteCars:", favoriteCars);
  return (
    <Container>
      <ul className={css.list}>
        {Array.isArray(cars) &&
          cars.length > 0 &&
          cars.map((car) => {
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
    </Container>
  );
};

export default CarsList;
