import sprite from "../../../assets/sprite/sprite.svg";

const Icon = ({ name, fill, stroke, width = 16, height = 16 }) => {
  return (
    <svg width={width} height={height} fill={fill} stroke={stroke}>
      <use href={`${sprite}#${name}`}></use>
    </svg>
  );
};

export default Icon;
