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
      {isLoading && <Loader />}
      {error && <p>Error: {error}</p>}
    </>
  );
};

export default DetailsPage;
