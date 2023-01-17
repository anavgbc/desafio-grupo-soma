import { useContext } from "react";
import { CardContext } from "../../providers/CardContext";
import { FiSettings } from "react-icons/fi";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";
import { ModalContext } from "../../providers/ModalContext";

const ModalSettings = () => {
  const { setGender, nextCard } = useContext(CardContext);
  const { setOverlay, onOpen, OverlayOne, isOpen, onClose } =
    useContext(ModalContext);

  return (
    <>
      <Button
        _hover={{ color: "#c3c3c3" }}
        _focus={{
          bg: "none",
        }}
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        <FiSettings />
      </Button>

      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Mostrar apenas...</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <ButtonGroup gap="4">
              <Button
                colorScheme={"gray"}
                _focus={{
                  bg: "#e66868",
                  color: "#ffffff",
                }}
                onClick={() => {
                  setGender("male");
                }}
              >
                Homens
              </Button>
              <Button
                colorScheme={"gray"}
                _focus={{
                  bg: "#e66868",
                  color: "#ffffff",
                }}
                onClick={() => {
                  setGender("female");
                }}
              >
                Mulheres
              </Button>
              <Button
                _focus={{
                  bg: "#e66868",
                  color: "#ffffff",
                }}
                colorScheme={"gray"}
                onClick={() => {
                  setGender("all");
                }}
              >
                Ambos
              </Button>
            </ButtonGroup>
          </ModalBody>

          <ModalFooter>
            <Button
              colorScheme="gray"
              _focus={{
                bg: "#e66868",
                color: "#ffffff",
              }}
              mr={4}
              onClick={() => {
                nextCard();
                onClose();
              }}
            >
              Salvar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalSettings;
