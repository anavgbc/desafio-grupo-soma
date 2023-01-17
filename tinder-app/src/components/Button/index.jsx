import { useContext } from "react";
import { AnimationContext } from "../../providers/AnimationContext";
import { CardContext } from "../../providers/CardContext";
import { ButtonAction } from "./style";

const Button = ({ icon, action }) => {
  const { nextCard } = useContext(CardContext);
  const { setAnimation, setIsClicked, isClicked } =
    useContext(AnimationContext);

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
