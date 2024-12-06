import { Button } from "@nextui-org/react";
import PlusIcon from "./PlusIcon";

export default function App() {
  return (
    <div className="flex gap-4 items-center">
      <Button
        isIconOnly
        color="default"
        variant="faded"
        aria-label="Take a photo"
      >
        <PlusIcon />
      </Button>
    </div>
  );
}
