import { useNavigate } from "react-router-dom";
import Button from "../ui/Button/Button";
import HeartIcon from "../HeartIcon/HeartIcon";
import css from "./CarItem.module.css";

const CarCard = ({ car, isFavorite, onToggle }) => {
  const navigate = useNavigate();
  const addressParts = car.address.split(", ");
  const city = addressParts[1];
  const country = addressParts[2];
  const carType = car.type;
  const formatCarType =
    carType.charAt(0).toUpperCase() + carType.slice(1).toLowerCase();
  const carModel = car.model.split("-").join(" ").split(" ");
  let modifiedCarModal;
  if (carModel.length === 1) {
    modifiedCarModal = carModel[0];
  } else {
    modifiedCarModal = `${carModel[0]}  ${carModel[1]}`;
  }

  const handleClickBtn = () => {
    navigate(`/catalog/${car.id}`);
  };

  return (
    <div className={css.card}>
      <div className={css.imageContainer}>
        <img src={car.img} alt={car.description} className={css.img} />
        <button onClick={onToggle} type="button" className={css.btnIcon}>
          <HeartIcon isFavorite={isFavorite} />
        </button>
      </div>
      <div className={css.wrapperTitle}>
        <p className={css.title}>
          {car.brand} <span className={css.model}>{modifiedCarModal}</span>,{" "}
          {car.year}
        </p>
        <p className={css.title}>{car.rentalPrice} $</p>
      </div>

      <div className={css.wrapperDetails}>
        <div className={css.details}>
          <span className={css.span}>{city}</span>
          <span className={css.span}>{country}</span>
          <span className={css.span}>{car.rentalCompany}</span>
        </div>
        <div className={css.details}>
          <span className={css.span}>{formatCarType}</span>
          <span>{car.mileage.toLocaleString("uk-UA")} km</span>
        </div>
      </div>
      <Button
        className={css.btnReadMore}
        type="button"
        onClick={handleClickBtn}
      >
        Read more
      </Button>
    </div>
  );
};

export default CarCard;
