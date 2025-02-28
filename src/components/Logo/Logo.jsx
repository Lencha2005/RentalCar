import { Link } from "react-router-dom";
import Icon from "../ui/Icon/Icon";

const Logo = () => {
  return (
    <div>
      <Link to="/" >
        <Icon name="icon-logo" width={104} height={16} />
      </Link>
    </div>
  );
};

export default Logo;
