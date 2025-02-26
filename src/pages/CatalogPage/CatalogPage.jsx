import { useSelector } from "react-redux";
import CarsList from "../../components/CarsList/CarsList";
import { selectError, selectIsLoading } from "../../redux/car/selectors";
import Loader from "../../components/ui/Loader/Loader";

const CatalogPage = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);

  return (
    <>
      <CarsList />
      {isLoading && <Loader />}
      {error && <p>Error: {error}</p>}
    </>
  );
};

export default CatalogPage;
