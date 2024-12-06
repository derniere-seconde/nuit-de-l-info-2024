import { Button as ButtonUI } from "@nextui-org/react";
import propTypes from "prop-types";

const Button = ({ isDisabled }) => {
  return (
    <ButtonUI
      isDisabled={isDisabled}
      className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700"
    >
      S&apos;abonner à l&apos;infolettre
    </ButtonUI>
  );
};

Button.propTypes = {
  isDisabled: propTypes.bool,
};

export default Button;
