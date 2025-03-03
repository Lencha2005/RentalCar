import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarById } from "../../redux/car/operations";
import {
  selectError,
  selectIsLoading,
  selectSelectedCar,
} from "../../redux/car/selectors";
import CarDetails from "../../components/CarDetails/CarDetails";
import Loader from "../../components/ui/Loader/Loader";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import css from "./DetailsPage.module.css"

const DetailsPage = () => {
  const { id } = useParams();
  const dispath = useDispatch();

  const car = useSelector(selectSelectedCar);
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispath(fetchCarById(id));
  }, [dispath, id]);

  return (
    <div className={css.wrapper}>
      {car && <CarDetails car={car} />}
      {isLoading && <Loader />}
      {error && <ErrorMessage/>}
    </div>
  );
};

export default DetailsPage;
