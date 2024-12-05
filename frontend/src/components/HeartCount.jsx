import PropTypes from "prop-types";
import FullHeart from "../assets/full-heart.png";
import HalfHeart from "../assets/half-heart.png";
import EmptyHeart from "../assets/empty-heart.png";

const HeartCount = ({ count, size }) => {
  const fullHeartsCount = Math.floor(count);
  const halfHeartCount = count % 1 >= 0.5 ? 1 : 0;
  const emptyHeartsCount = 8 - fullHeartsCount - halfHeartCount;

  const heartStyle = {
    width: size,
    height: size,
  };

  return (
    <div className="flex">
      {Array.from({ length: fullHeartsCount }).map((_, index) => (
        <img
          key={`full-${index}`}
          src={FullHeart}
          alt="Full Heart"
          style={heartStyle}
        />
      ))}
      {halfHeartCount > 0 && (
        <img src={HalfHeart} alt="Half Heart" style={heartStyle} />
      )}
      {Array.from({ length: emptyHeartsCount }).map((_, index) => (
        <img
          key={`empty-${index}`}
          src={EmptyHeart}
          alt="Empty Heart"
          style={heartStyle}
        />
      ))}
    </div>
  );
};

HeartCount.propTypes = {
  count: PropTypes.number.isRequired,
  size: PropTypes.string,
};

HeartCount.defaultProps = {
  size: "1.5rem",
};

export default HeartCount;
