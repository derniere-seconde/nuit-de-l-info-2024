import propTypes from "prop-types";

const PlusIcon = ({
  fill = "currentColor",
  filled,
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 24 24"
      fill={filled ? fill : "none"}
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M12 5v14m7-7H5"
        stroke={fill}
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

PlusIcon.propTypes = {
  fill: propTypes.string,
  filled: propTypes.bool,
  size: propTypes.number,
  height: propTypes.number,
  width: propTypes.number,
};

export default PlusIcon;
