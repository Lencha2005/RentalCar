import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/car/operetions";
import { setBrand, setMileage, setRentalPrice } from "../../redux/filter/slice";
import { useEffect} from "react";

import CustomSelector from "../ui/CustomSelector/CustomSelector";
import Button from "../ui/Button/Button";
import css from "./FilterForm.module.css";
import {
  selectBrand,
  selectBrands,
  selectMileage,
  selectRentalPrice,
} from "../../redux/filter/selectors";
import { fetchBrands } from "../../redux/filter/operations";

const FilterForm = ({ onFilter }) => {
  const dispatch = useDispatch();

  const allBrands = useSelector(selectBrands);
  const brand = useSelector(selectBrand);
  const rentalPrice = useSelector(selectRentalPrice);
  const mileage = useSelector(selectMileage);

  useEffect(() => {
    dispatch(fetchBrands());
  }, [dispatch]);

  const generatePrices = () => {
    let price = [];
    for (let i = 30; i <= 100; i += 10) {
      price.push(i);
    }
    return price;
  };

  const prices = generatePrices();

  // Опции для кастомного селекта
  const brandOptions = allBrands.map((brand) => ({
    value: brand,
    label: brand,
  }));
  const priceOptions = prices.map((price) => ({
    value: price,
    label: `${price}`,
  }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const filters = {
      brand,
      rentalPrice,
      mileage,
    };
    dispatch(fetchCars({ page: 1, filters }));
    onFilter(filters);
  };

  return (
        <form className={css.form} onSubmit={handleSubmit}>
          <div>
            <p className={css.labelText}>Car brand</p>
            <CustomSelector
              options={brandOptions}
              // value={values.brand}
              value={brandOptions.find((b) => b.value === brand) || {}}
              onChange={(val) => dispatch(setBrand(val?.value || null))}
              placeholder="Choose a brand"
            />
          </div>
          <div>
            <p className={css.labelText}>Price / 1hour</p>
            <CustomSelector
              options={priceOptions}
              value={priceOptions.find((p) => p.value === rentalPrice || null)}
              onChange={(val) => dispatch(setRentalPrice(val?.value || null))}
              placeholder="Choose a price"
              formatValue={(val) =>
                val ? `To $${val.value}` : "Choose a price"
              }
            />
          </div>
          <div>
            <p className={css.labelText}>Car mileage / km</p>
            <div className={css.wrapInputMileage}>
              <input
                className={`${css.input} ${css.inputMileage}`}
                type="text"
                name="mileageFrom"
                value={
                  mileage.from
                    ? `From ${Number(mileage.from).toLocaleString(
                        "en-US"
                      )}`
                    : "From "
                }
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, ""); // Лишаємо тільки цифри
                  dispatch(setMileage({...mileage, from: value}));
                }}
              />
              <input
                className={`${css.input} ${css.inputMileage}`}
                type="text"
                name="mileageTo"
                value={
                mileage.to
                    ? `To ${Number(mileage.to).toLocaleString("en-US")}`
                    : "To "
                }
                onChange={(e) => {
                  const value = e.target.value.replace(/\D/g, ""); // Лишаємо тільки цифри
                  dispatch(setMileage({...mileage, to: value}));
                }}
              />
            </div>
          </div>
          <Button className={css.btnSearch} type="submit">
            Search
          </Button>
        </form>
      )
    };

  
export default FilterForm;
