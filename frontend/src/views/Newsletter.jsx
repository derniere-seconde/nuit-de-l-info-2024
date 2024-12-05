import TextInput from "../components/TextInput";

const Newsletter = () => {
  return (
    <div>
      <h1 className="font-bold text-red-800">Newsletter</h1>
      <TextInput label="Prénom" />
      <TextInput label="Nom" />
      <TextInput label="Email" />
    </div>
  );
};

export default Newsletter;
