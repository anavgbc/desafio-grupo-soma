import { useContext } from "react";
import { AnimationContext } from "../../providers/AnimationContext";
import { CardContext } from "../../providers/CardContext";
import { ButtonAction } from "./style";

const Button = ({ action, children }) => {
  const { nextCard } = useContext(CardContext);
  const { setAnimation, setIsClicked, isClicked } =
    useContext(AnimationContext);

  const handleClick = () => {
    setAnimation(action);
    setIsClicked(!isClicked);
    nextCard();
  };
  return (
    <ButtonAction
      className={`button--${action}`}
      onClick={() => {
        handleClick();
      }}
    >
      {children}
    </ButtonAction>
  );
};

export default Button;
