import { useDispatch, useSelector} from "react-redux";
import {
  // selectBrand,
  // selectMileage,
  // selectRenatalPrice,
//   selectPrice,
} from "../../redux/filter/selectors";
// import { setBrand, setMileage, setPrice } from "../../redux/filter/slice";
import { Field, Form, Formik } from "formik";
import Button from "../ui/Button/Button";
import css from "./FilterForm.module.css";
import { selectCars } from "../../redux/car/selectors";
import { fetchCars } from "../../redux/car/operetions";

const FilterForm = () => {
  const dispatch = useDispatch();
  // const brands = useSelector(selectBrand);
  // const prices = useSelector(selectRenatalPrice);
  const cars = useSelector(selectCars);
  // console.log("cars: ", cars);

  const uniqueBrands = [...new Set(cars.map((car) => car.brand))];
  const uniquePrices = [...new Set(cars.map((car) => car.rentalPrice))];

  const initialValues = {
    brand: "",
    rentalPrice: "",
    mileageFrom: "",
    mileageTo: "",
  };

  const handleSubmit = (values, actions) => {
    const filters = {};
    if (values.brand) filters.brand = values.brand;
    if (values.rentalPrice) filters.rentalPrice = values.rentalPrice;
    if (values.mileageFrom || values.mileageTo) {
      filters.mileage = `${values.mileageFrom}-${values.mileageTo}`;
    }
    console.log('filters: ', filters);
    dispatch(fetchCars({page:1, filters}))
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      <Form className={css.form}>
        <label className={css.label}>
          <p className={css.labelText}>Car brand</p>
          <Field
            className={`${css.input} ${css.inputBrand}`}
            as="select"
            name="brand"
          >
            <option value="" disabled hidden>
              Choose a brand
            </option>
            {uniqueBrands.map((brand) => {
              return (
                <option key={brand} value={brand}>
                  {brand}
                </option>
              );
            })}
          </Field>
        </label>
        <label className={css.label}>
          <p className={css.labelText}>Price / 1hour</p>
          <Field
            className={`${css.input} ${css.inputPrice}`}
            as="select"
            name="rentalPrice"
          >
            <option value="" disabled hidden>
              Choose a price
            </option>
            {uniquePrices.map((price) => {
              return (
                <option key={price} value={price}>
                  {price}
                </option>
              );
            })}
          </Field>
        </label>
        <label className={css.label}>
          <p className={css.labelText}>Car mileage / km</p>
          <div className={css.wrapInputMileage}>
            <Field
              className={`${css.input} ${css.inputMileage}`}
              type="number"
              name="mileageFrom"
              placeholder="From"
            />
            <Field
              className={`${css.input} ${css.inputMileage}`}
              type="number"
              name="mileageTo"
              placeholder="To"
            />
          </div>
        </label>
        <Button className={css.btnSearch} type="submit">
          Search
        </Button>
      </Form>
    </Formik>
  );
};

export default FilterForm;
