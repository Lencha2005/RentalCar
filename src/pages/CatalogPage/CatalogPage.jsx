import { useSelector } from "react-redux";
import CarsList from "../../components/CarsList/CarsList";
import { selectError, selectIsLoading } from "../../redux/car/selectors";
import Loader from "../../components/ui/Loader/Loader";
import css from "./CatalogPage.module.css";

const CatalogPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <div className={css.wrapper}>
      <CarsList />
      {isLoading && <Loader />}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default CatalogPage;
