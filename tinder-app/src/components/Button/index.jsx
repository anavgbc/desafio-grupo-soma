import { useContext } from "react";
import { CardContext } from "../../providers/CardContext";
import { ButtonAction } from "./style";

const Button = ({ icon, action }) => {
  const { setAnimation, nextCard, setIsClicked, isClicked } =
    useContext(CardContext);

  const handleClick = () => {
    setAnimation(action);
    setIsClicked(!isClicked);
    nextCard();
  };
  console.log(action);
  return (
    <ButtonAction
      className={`button--${action}`}
      onClick={() => {
        handleClick();
      }}
    >
      {icon}
    </ButtonAction>
  );
};

export default Button;
