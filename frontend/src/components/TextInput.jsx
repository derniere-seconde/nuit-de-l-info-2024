import { Field, Input as InputUI, Label } from "@headlessui/react";
import PropTypes from "prop-types";

const Input = ({ label }) => {
  return (
    <Field>
      <Label>{label}</Label>
      <InputUI name={label} type="text" />
    </Field>
  );
};

Input.propTypes = {
  label: PropTypes.string.isRequired,
};

export default Input;
