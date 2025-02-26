import { Link } from "react-router-dom";
import Icon from "../ui/Icon/Icon";
import css from "./Logo.module.css";

const Logo = () => {
  return (
    <div>
      <Link to="/" className={css.logo}>
        <Icon name="icon-logo" width={104} height={16} />
      </Link>
    </div>
  );
};

export default Logo;
