import { CardContextProvider } from "./CardContext";

const Providers = ({ children }) => {
  return <CardContextProvider>{children}</CardContextProvider>;
};

export default Providers;
