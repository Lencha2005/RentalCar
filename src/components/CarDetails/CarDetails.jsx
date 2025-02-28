import BookingForm from "../BookingForm/BookingForm";
import Icon from "../ui/Icon/Icon";
import css from "./CarDetails.module.css";

const CarDetails = ({ car }) => {
  const addressParts = car.address.split(", ");
  const city = addressParts[1];
  const country = addressParts[2];
  const carType = car.type;
  const formatCarType =
    carType.charAt(0).toUpperCase() + carType.slice(1).toLowerCase();

  return (
    <div className={css.carWrap}>
      <img src={car.img} alt={car.description} className={css.img} />
      <BookingForm className={css.bookingForm} />
      <div className={css.wrapTitle}>
        <h1 className={css.title}>
          {car.brand} {car.model}
          <span className={css.id}>id: {car.mileage}</span>
        </h1>
        <div className={css.location}>
          <Icon name="icon-location" />
          <span className={css.locationAddress}>
            {city}, {country}
          </span>
          <span>Mileage: {car.mileage.toLocaleString("uk-UA")} km</span>
        </div>
        <p className={css.price}>{car.rentalPrice} $</p>
        <p className={css.text}>{car.description}</p>
      </div>
      <div className={css.wrapperDescription}>
        <div className={css.description}>
          <h2 className={css.descriptionTitle}>Rental Conditions:</h2>
          <div className={css.descriptionItem}>
            <Icon name="icon-check-mark" />
            <p>{car.rentalConditions[0]}</p>
          </div>
          <div className={css.descriptionItem}>
            <Icon name="icon-check-mark" />
            <p>{car.rentalConditions[2]}</p>
          </div>
          <div className={css.descriptionItem}>
            <Icon name="icon-check-mark" />
            <p>{car.rentalConditions[1]}</p>
          </div>
        </div>
        <div className={css.description}>
          <h2 className={css.descriptionTitle}>Car Specifications:</h2>
          <div className={css.descriptionItem}>
            <Icon name="icon-year" />
            <p>Year: {car.year}</p>
          </div>
          <div className={css.descriptionItem}>
            <Icon name="icon-type" />
            <p>Type: {formatCarType}</p>
          </div>
          <div className={css.descriptionItem}>
            <Icon name="icon-fuel" />
            <p>Fuel Consumption: {car.fuelConsumption}</p>
          </div>
          <div className={css.descriptionItem}>
            <Icon name="icon-gear" />
            <p>Engine Size: {car.engineSize}</p>
          </div>
        </div>
        <div className={css.description}>
          <h2 className={css.descriptionTitle}>
            Accessories and functionalities:
          </h2>
          {car?.functionalities?.length > 0 ? (
            car.functionalities.map((item) => (
              <div key={item} className={css.descriptionItem}>
                <Icon name="icon-check-mark" />
                <p>{item}</p>
              </div>
            ))
          ) : (
            <p>No information available</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarDetails;
