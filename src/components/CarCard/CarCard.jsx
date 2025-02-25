import { useNavigate } from "react-router-dom";
import Button from "../ui/Button/Button";
import css from "./CarCard.module.css";

const CarCard = ({ car }) => {
  const navigate = useNavigate();
  const addressParts = car.address.split(", ");
  const city = addressParts[1];
  const country = addressParts[2];

 const handelClick = (id) => {
navigate(`/catalog/${id}`)
 }

  return (
    <div className={css.card}>
      <div className={css.imageContainer}>
        <img src={car.img} alt={car.description} className={css.img} />
        <svg className={css.svg} width={16} height={16}>
          <use href="../../../public/sprite.svg#icon-heart"></use>
        </svg>
      </div>
      <div className={css.wrapperTitle}>
        <p className={css.title}>
          {car.brand} <span className={css.model}>{car.model}</span>, {car.year}
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
          <span className={css.span}>{car.type}</span>
          <span>{car.mileage}</span>
        </div>
      </div>
      <Button className={css.btnReadMore} type="button" onClick={handelClick}>
        Read more
      </Button>
    </div>
  );
};

export default CarCard;
