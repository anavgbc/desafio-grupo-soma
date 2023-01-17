import { IoIosChatbubbles } from "react-icons/io";
import ModalSettings from "../Modal";
import { Container } from "./style";

const Header = () => {
  return (
    <Container>
      <div className="header-box">
        <ModalSettings />
        <button>
          <IoIosChatbubbles />
        </button>
      </div>
    </Container>
  );
};

export default Header;
