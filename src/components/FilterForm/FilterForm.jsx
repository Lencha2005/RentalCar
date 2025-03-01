import { useDispatch, useSelector } from "react-redux";
import { fetchCars } from "../../redux/car/operations";
import { setBrand, setMileage, setRentalPrice } from "../../redux/filter/slice";
import { useEffect, useRef, useState } from "react";
import {
  selectBrand,
  selectBrands,
  selectMileage,
  selectRentalPrice,
} from "../../redux/filter/selectors";
import { fetchBrands } from "../../redux/filter/operations";
import CustomSelector from "../ui/CustomSelector/CustomSelector";
import Button from "../ui/Button/Button";
import css from "./FilterForm.module.css";

const FilterForm = ({ onFilter }) => {
  const dispatch = useDispatch();
  const filterRef = useRef(null);

  const allBrands = useSelector(selectBrands);
  const brand = useSelector(selectBrand);
  const rentalPrice = useSelector(selectRentalPrice);
  const mileage = useSelector(selectMileage);

  const [localMileage, setLocalMileage] = useState({ from: "", to: "" });
  const [openSelector, setOpenSelector] = useState(null);

  useEffect(() => {
    dispatch(fetchBrands());
    setLocalMileage({ from: mileage.from || "", to: mileage.to || "" });
  }, [dispatch, mileage]);

  //Закриття селекторів
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (filterRef.current && !filterRef.current.contains(e.target)) {
        setOpenSelector(null);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [setOpenSelector]);

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
    label: price,
  }));

  const handleMileageChange = (e) => {
    const { name, value } = e.target;
    setLocalMileage((prev) => ({
      ...prev,
      [name]: value.replace(/\D/g, ""), // Лишаємо тільки цифри
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(setMileage(localMileage));

    const filters = {
      brand,
      rentalPrice,
      mileage: localMileage,
    };
    dispatch(setMileage(localMileage));
    dispatch(fetchCars({ page: 1, filters }));
    onFilter(filters);
  };

  return (
    <form className={css.form} onSubmit={handleSubmit} ref={filterRef}>
      <div>
        <p className={css.labelText}>Car brand</p>
        <CustomSelector
          options={brandOptions}
          id="brand"
          value={brandOptions.find((b) => b.value === brand) || {}}
          onChange={(val) => dispatch(setBrand(val?.value || null))}
          placeholder="Choose a brand"
          isOpen={openSelector === "brand"}
          setOpenSelector={setOpenSelector}
        />
      </div>
      <div>
        <p className={css.labelText}>Price / 1hour</p>
        <CustomSelector
          options={priceOptions}
          id="price"
          value={priceOptions.find((p) => p.value === rentalPrice || null)}
          onChange={(val) => dispatch(setRentalPrice(val?.value || null))}
          placeholder="Choose a price"
          formatValue={(val) => (val ? `To $${val.value}` : "Choose a price")}
          isOpen={openSelector === "price"}
          setOpenSelector={setOpenSelector}
        />
      </div>
      <div>
        <p className={css.labelText}>Car mileage / km</p>
        <div className={css.wrapInputMileage}>
          <input
            className={`${css.input} ${css.inputMileage}`}
            type="text"
            name="from"
            value={
              localMileage.from
                ? `From ${Number(localMileage.from).toLocaleString("en-US")}`
                : "From "
            }
            onChange={handleMileageChange}
          />
          <input
            className={`${css.input} ${css.inputMileage}`}
            type="text"
            name="to"
            value={
              localMileage.to
                ? `To ${Number(localMileage.to).toLocaleString("en-US")}`
                : "To "
            }
            onChange={handleMileageChange}
          />
        </div>
      </div>
      <Button className={css.btnSearch} type="submit">
        Search
      </Button>
    </form>
  );
};

export default FilterForm;
