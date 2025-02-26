import { useEffect } from "react";
import CarDetails from "../../components/CarDetails/CarDetails";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCarById } from "../../redux/car/operetions";
import {
  selectError,
  selectIsLoading,
  selectSelectedCar,
} from "../../redux/car/selectors";
import Loader from "../../components/ui/Loader/Loader";
import css from "./DetailsPage.module.css";

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
    <>
      {car && <CarDetails car={car} />}
      {isLoading && (
        <div className={css.loaderWrapper}>
          <Loader />
        </div>
      )}
      {error && <p>Error: {error}</p>}
    </>
  );
};

export default DetailsPage;
