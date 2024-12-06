import propTypes from "prop-types";

const TextBubble = ({ title, description, isSender }) => {
  return (
    <div className={`flex ${isSender ? "justify-end" : "justify-start"} mb-4`}>
      <div
        className={`relative max-w-xs px-4 py-2 rounded-t-lg ${isSender ? "bg-blue-500 text-white" : "bg-gray-200 text-black"} shadow-lg`}
        style={{
          wordWrap: "break-word",
        }}
      >
        {/* Title */}
        <div
          className={`font-semibold text-sm ${isSender ? "text-white" : "text-gray-800"}`}
        >
          {title}
        </div>

        {/* Description (Message) */}
        <div className="mt-1">{description}</div>

        {/* Bubble Tail */}
        <div
          style={{
            position: "absolute",
            bottom: "-12px", // Position the tail below the bubble
            left: isSender ? "auto" : "10px", // Tail for receiver (left)
            right: isSender ? "10px" : "auto", // Tail for sender (right)
            width: "0",
            height: "0",
            borderLeft: "12px solid transparent", // Left side of the tail
            borderRight: "12px solid transparent", // Right side of the tail
            borderTop: isSender ? "12px solid blue" : "12px solid gray", // Tail color
          }}
        ></div>
      </div>
    </div>
  );
};

TextBubble.propTypes = {
  title: propTypes.string.isRequired,
  description: propTypes.string.isRequired,
  isSender: propTypes.bool.isRequired,
};

TextBubble.defaultProps = {
  isSender: false,
};

export default TextBubble;
