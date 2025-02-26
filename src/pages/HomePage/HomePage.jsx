import { useNavigate } from "react-router-dom";
import Button from "../../components/ui/Button/Button";
import css from "./HomePage.module.css";

const HomePage = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/catalog");
  };
  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Find your perfect rental car</h1>
      <p className={css.text}>
        Reliable and budget-friendly rentals for any journey
      </p>
      <Button type="button" onClick={handleClick}>
        View Catalog
      </Button>
    </div>
  );
};

export default HomePage;
