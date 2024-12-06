import CorpsHumain from "../assets/corps-humain.png";
import Organ from "./Organ";

const HumanBody = () => {
  return (
    <>
      <div>
        <img
          src={CorpsHumain}
          alt="corps humain"
          style={{
            width: "100%",
            height: "100%",
            objectFit: "contain",
          }}
        ></img>
      </div>
    </>
  );
};
export default HumanBody;