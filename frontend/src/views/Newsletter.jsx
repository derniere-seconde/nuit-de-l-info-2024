import Tcha from "../components/Tcha";
import Button from "../components/Button";
import { useState, useRef, useEffect } from "react";
import "../styles/Newsletter.css";

const Newsletter = () => {
  const initialFormData = {
    firstName: "",
    lastName: "",
    email: "",
  };
  const [formData, setFormData] = useState(initialFormData);
  const [displayedData, setDisplayedData] = useState(initialFormData);
  const [, setRedirectionMap] = useState({});
  const [buttonMovesLeft, setButtonMovesLeft] = useState(2);
  const [isStatic, setIsStatic] = useState(false);
  const [holdProgress, setHoldProgress] = useState(0);
  const [isCaptchaVisible, setIsCaptchaVisible] = useState(false);
  const [isRobot, setIsRobot] = useState(true);

  const [cookiesCount, setCookiesCount] = useState(0);

  const HOLD_TIME_REQUIRED = 100;
  const [buttonStyle, setButtonStyle] = useState({
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  });

  const holdInterval = useRef(null);

  const fields = {
    firstName: "Prénom",
    lastName: "Nom",
    email: "Email",
  };

  useEffect(() => {
    const fields = Object.keys(initialFormData);
    const mapping = fields.reduce((acc, field) => {
      acc[field] = field;
      return acc;
    }, {});
    setRedirectionMap(mapping);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Random chance (10%) to reset another field (DARK UX ADDITION)
    if (Math.random() < 0.1) {
      const fields = Object.keys(initialFormData).filter((f) => f !== name);
      const randomField = fields[Math.floor(Math.random() * fields.length)];
      setFormData((prev) => ({
        ...prev,
        [randomField]: "",
      }));
      setDisplayedData((prev) => ({
        ...prev,
        [randomField]: "",
      }));
    }

    // Delayed typing logic (unchanged)
    setTimeout(() => {
      setDisplayedData((prev) => ({
        ...prev,
        [name]: value,
      }));
    }, 500);

    // Always update the form data (unchanged)
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleFormSubmit = (_e) => {
    window.location.reload();
  };

  const handleMouseOver = () => {
    if (!isStatic && buttonMovesLeft > 0) {
      randomizeButtonStyle();
      setButtonMovesLeft(buttonMovesLeft - 1);
    } else if (buttonMovesLeft === 0) {
      setIsStatic(true);
      setButtonStyle({
        left: "50%",
        bottom: "10%",
        transform: "translate(-50%, 0)",
      });
    }
  };

  const randomizeButtonStyle = () => {
    const randomLeft = `${Math.random() * 90}%`;
    const randomTop = `${Math.random() * 90}%`;
    setButtonStyle({
      left: randomLeft,
      top: randomTop,
      transform: "translate(-50%, -50%)",
    });
  };

  // Button hold logic (unchanged)
  const handleMouseDown = () => {
    if (isStatic && !isCaptchaVisible) {
      holdInterval.current = setInterval(() => {
        setHoldProgress((prev) => {
          if (prev >= 100) {
            clearInterval(holdInterval.current);
            setIsCaptchaVisible(true);
            // Once CAPTCHA is visible, increment cookiesCount (DARK UX ADDITION)
            setCookiesCount((c) => c + 1);
            return 100;
          }
          return prev + 1;
        });
      }, HOLD_TIME_REQUIRED / 100);
    }
  };

  const handleMouseUp = () => {
    if (holdInterval.current) {
      clearInterval(holdInterval.current);
      holdInterval.current = null;
    }
    if (holdProgress < 100) {
      setHoldProgress(0);
    }
  };

  const randomPlaceholders = [
    "Type here... or not",
    "Enter something useless",
    "Try again",
    "Go ahead, type",
    "This won't help",
    "???",
  ];

  // Dark UX addition: Randomly choose a placeholder each render
  const getRandomPlaceholder = () => {
    return randomPlaceholders[
      Math.floor(Math.random() * randomPlaceholders.length)
    ];
  };

  // Dark UX addition: Hover effect for labels
  // CSS could be added in Newsletter.css to add transitions or shake effects
  // For simplicity, we just change the label text slightly on hover in inline style or by adding a class.
  const [hoveredField, setHoveredField] = useState(null);

  return (
    <div className="newsletter-page">
      {/* Display cookiesCount as a trollish metric */}
      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "10px",
          color: "red",
        }}
      >
        Cookies Count: {cookiesCount}
      </div>

      <form className="newsletter-form">
        <h2>Formulaire d&apos;abonnement à l&apos;infolettre</h2>

        {/* Form fields with questions */}
        {Object.entries(formData).map(([key]) => (
          <div key={key} className="form-group">
            <label
              htmlFor={key}
              onMouseEnter={() => setHoveredField(key)}
              onMouseLeave={() => setHoveredField(null)}
              style={{ cursor: "help" }}
            >
              {fields[key]}
              {hoveredField === key ? " 😈" : ""}
            </label>
            <input
              type="text"
              id={key}
              name={key}
              placeholder={getRandomPlaceholder()}
              value={displayedData[key]}
              onChange={handleInputChange}
            />
          </div>
        ))}

        {/* CAPTCHA */}
        {isCaptchaVisible && (
          <div className="flex flex-col gap-2">
            {isRobot && <Tcha setIsRobot={setIsRobot} />}
            <Button isDisabled={isRobot} onClick={handleFormSubmit} />
          </div>
        )}

        {/* Moving/Static Button (Cookie Button) */}
        {!isCaptchaVisible && (
          <button
            type="button"
            className={`submit-button ${isStatic ? "static" : "running"}`}
            style={buttonStyle}
            onMouseEnter={handleMouseOver}
            onMouseDown={handleMouseDown}
            onMouseUp={handleMouseUp}
          >
            {isStatic ? "Hold Me" : "Catch Me!"}
          </button>
        )}
        {isStatic && (
          <div className="progress-bar">
            <div
              className="progress"
              style={{
                width: `${holdProgress}%`,
              }}
            ></div>
          </div>
        )}
      </form>
    </div>
  );
};

export default Newsletter;
