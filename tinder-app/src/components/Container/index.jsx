import { CardContext } from "../../providers/CardContext";
import { useContext } from "react";
import { Container } from "./style";
import Button from "../Button";
import Header from "../Header";
import Card from "../Card";
import { FaCheck } from "react-icons/fa";
import { CgClose } from "react-icons/cg";
import { BsStarFill } from "react-icons/bs";

const ContainerPage = () => {
  const { user } = useContext(CardContext);

  return (
    <>
      <Container>
        <Header />
        <div className="container--box">
          <h3>Discover</h3>
          <Card user={user} />
          <div className="container--buttons">
            <Button icon={<CgClose />} action="reject" />
            <Button icon={<BsStarFill />} action="superlike" />
            <Button icon={<FaCheck />} action="accept" />
          </div>
        </div>
      </Container>
    </>
  );
};
// BsHeart, CiRainbow, CiLight, DiCodeigniter, FcLikePlaceholder, GiStripedSun

export default ContainerPage;
