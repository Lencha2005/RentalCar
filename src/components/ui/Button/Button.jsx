import clsx from "clsx";
import css from "./Button.module.css";

const Button = ({
  variant = "default",
  type = "button",
  className,
  onClick,
  children,
}) => {
  const btnStyle = clsx(
    css.btn,
    variant === "default" && css.btnBlue,
    variant === "loadmore" && css.btnLoadMore,
    className && className
  );
  return (
    <button type={type} className={btnStyle} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
