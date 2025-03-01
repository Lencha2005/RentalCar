import Icon from "../Icon/Icon";
import css from "./CustomSelector.module.css";

const CustomSelector = ({
  id,
  value,
  options,
  placeholder,
  onChange,
  formatValue,
  isOpen,
  setOpenSelector,
}) => {
  const handleSelect = (option) => {
    onChange(option.value);
    setOpenSelector(null);
  };

  const handleToggle = () => {
    setOpenSelector((prev) => (prev === id ? null : id));
  };

  return (
    <div className={css.selectWrapper}>
      <div className={css.select} onClick={handleToggle}>
        {formatValue ? formatValue(value) : value || placeholder}
        <Icon name="icon-chevron" className={css.selectIcon} />
      </div>
      {isOpen && (
        <ul className={css.dropdown}>
          {options.map((option) => (
            <li key={option.value} onClick={() => handleSelect(option)}>
              {option.label}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelector;
