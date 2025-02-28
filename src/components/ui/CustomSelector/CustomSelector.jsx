import { useState } from "react";
import Icon from "../Icon/Icon";
import css from "./CustomSelector.module.css";

const CustomSelector = ({value, options, placeholder, onChange, formatValue}) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleSelect = (option) => {
    onChange(option);
    setIsOpen(false);
  }

  const handleToggle = () => {
setIsOpen(!isOpen);
  }

    return (
    <div className={css.selectWrapper}>
        <div className={css.select} onClick={handleToggle}>
        {formatValue ? formatValue(value) : value?.label || placeholder}
            <Icon name='icon-chevron' className={css.selectIcon}/>
        </div>
        {isOpen && (
            <ul className={css.dropdown}>
                {options.map((option) => (
                    <li key={option.value} onClick={()=> handleSelect(option)}>
                       {option.label}
                    </li>
                ))}
            </ul>
        )}
    </div>
  )
}

export default CustomSelector