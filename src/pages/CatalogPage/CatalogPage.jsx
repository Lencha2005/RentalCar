import { useSelector } from "react-redux";
import { selectError, selectIsLoading } from "../../redux/car/selectors";
import CarsList from "../../components/CarsList/CarsList";
import ErrorMessage from "../../components/ErrorMessage/ErrorMessage";
import Loader from "../../components/ui/Loader/Loader";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div className={css.wrapper}>
      <CarsList />
      {isLoading && <Loader />}
      {error && <ErrorMessage/>}
    </div>
  );
};

export default CatalogPage;
