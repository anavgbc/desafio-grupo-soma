import { createContext, useState } from "react";
import { ModalOverlay, useDisclosure } from "@chakra-ui/react";

export const ModalContext = createContext({});

export const ModalContextProvider = ({ children }) => {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  const [overlay, setOverlay] = useState(<OverlayOne />);
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <ModalContext.Provider
      value={{
        OverlayOne,
        overlay,
        setOverlay,
        isOpen,
        onOpen,
        onClose,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};
