import Input from "../components/TextInput";
import Button from "../components/Button";

const Newsletter = () => {
  return (
    <div>
      <h1 className="font-bold text-red-800">Newsletter</h1>
      <Input label="Prénom" />
      <Input label="Nom" />
      <Input label="Email" />
      <Button />
    </div>
  );
};

export default Newsletter;
