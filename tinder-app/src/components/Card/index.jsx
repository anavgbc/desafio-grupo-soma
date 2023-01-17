import { Container } from "./style";
import { useContext } from "react";
import { motion } from "framer-motion";
import { AiOutlineInfoCircle } from "react-icons/ai";
import { AnimationContext } from "../../providers/AnimationContext";

const Card = ({ user }) => {
  const { animationClass, controls } = useContext(AnimationContext);
  console.log(user);

  return (
    <>
      {user && (
        <Container>
          <motion.div className={`card ${animationClass}`} animate={controls}>
            <img src={user.picture.large} alt="Profile" />
            <div className="card--info">
              <div>
                <h3>
                  {user.name.first}, {user.dob.age}
                </h3>
                <p>
                  {user.location.city}, {user.location.country}
                </p>
              </div>
              <span>
                <AiOutlineInfoCircle />
              </span>
            </div>
          </motion.div>
        </Container>
      )}
    </>
  );
};

export default Card;
