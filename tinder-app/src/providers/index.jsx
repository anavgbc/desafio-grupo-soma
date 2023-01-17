import { CardContextProvider } from "./CardContext";
import { AnimationContextProvider } from "./AnimationContext";
import { ModalContextProvider } from "./ModalContext";

const Providers = ({ children }) => {
  return (
    <ModalContextProvider>
      <AnimationContextProvider>
        <CardContextProvider>{children}</CardContextProvider>;
      </AnimationContextProvider>
    </ModalContextProvider>
  );
};

export default Providers;
