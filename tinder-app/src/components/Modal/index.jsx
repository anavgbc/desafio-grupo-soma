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
  useDisclosure,
  Button,
  ButtonGroup,
} from "@chakra-ui/react";

const ModalSettings = () => {
  const { setGender, nextCard, OverlayOne, setOverlay } =
    useContext(CardContext);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        _hover={{ color: "#c3c3c3" }}
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
