import { Field, Input, Label } from "@headlessui/react";
import PropTypes from "prop-types";

const TextInput = ({ label }) => {
  return (
    <Field>
      <Label>{label}</Label>
      <Input name={label} type="text" />
    </Field>
  );
};

TextInput.propTypes = {
  label: PropTypes.string.isRequired,
};

export default TextInput;
