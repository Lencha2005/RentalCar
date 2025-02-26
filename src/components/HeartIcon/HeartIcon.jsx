import { IoHeartOutline } from "react-icons/io5";
import { FaHeart } from "react-icons/fa6";
import css from "./HeartIcon.module.css";

const HeartIcon = ({ isFavorite }) => {
  return (
    <div>
      {isFavorite ? (
        <FaHeart className={css.empty} />
      ) : (
        <IoHeartOutline className={css.full} />
      )}
    </div>
  );
};

export default HeartIcon;
