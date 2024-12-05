import { Button as ButtonUI } from "@headlessui/react";

const Button = () => {
  return (
    <ButtonUI className="rounded bg-sky-600 py-2 px-4 text-sm text-white data-[hover]:bg-sky-500 data-[active]:bg-sky-700">
      S&apos;abonner à l&apos;infolettre
    </ButtonUI>
  );
};

export default Button;
