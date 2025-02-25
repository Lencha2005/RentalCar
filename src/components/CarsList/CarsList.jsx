import { useDispatch, useSelector } from "react-redux"
import { selectCars } from "../../redux/car/selectors";

import CarCard from "../CarCard/CarCard";
import { useEffect } from "react";
import { fetchCars } from "../../redux/car/operetions";
import css from "./CarsList.module.css"
import Container from "../ui/Container/Container";

const CarsList = () => {
  const dispatch = useDispatch();
  const cars = useSelector(selectCars);

  useEffect(() => {
    dispatch(fetchCars());
  }, [dispatch]);

  console.log("cars from useSelector:", cars);
  return (
    <Container>
    <ul className={css.list}>
    {Array.isArray(cars) && cars.length > 0 && (cars.map((car) => {

      return (
        <li key={car.id} className={css.item}>
          <CarCard car={car}/>
        </li>
      )
    }))}
    </ul>
    </Container>
  )
}

export default CarsList