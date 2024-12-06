import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import GameContainer from "./GameContainer";
import config from "../game/main";
import { EventBus } from "../game/EventBus";
import propTypes from "prop-types";

const Tcha = ({ setIsRobot }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  EventBus.on("gameOver", () => {
    setIsRobot(false);
    onClose();
  });

  return (
    <>
      <Button onPress={onOpen}>Je ne suis pas un robot</Button>
      <Modal className="flex" isOpen={isOpen} onClose={onClose} size="2xl">
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Tcha</ModalHeader>
          <ModalBody>
            <GameContainer config={config} />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

Tcha.propTypes = {
  setIsRobot: propTypes.func.isRequired,
};

export default Tcha;
