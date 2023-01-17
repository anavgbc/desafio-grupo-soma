import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { motion, useAnimationControls } from "framer-motion";
import { ModalOverlay } from "@chakra-ui/react";

export const CardContext = createContext({});

export const CardContextProvider = ({ children }) => {
  const OverlayOne = () => (
    <ModalOverlay
      bg="blackAlpha.300"
      backdropFilter="blur(10px) hue-rotate(90deg)"
    />
  );
  const [users, setUsers] = useState("");
  const [gender, setGender] = useState("all");
  const [isClicked, setIsClicked] = useState(false);
  const [overlay, setOverlay] = useState(<OverlayOne />);
  const [animation, setAnimation] = useState("");
  const [isLoading, setLoading] = useState(false);

  const controls = useAnimationControls();
  // console.log(animation);

  function nextCard() {
    setLoading(true);
    api
      .get(`?gender=${gender}`)
      .then((response) => {
        setUsers(response.data.results[0]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    animation === "accept"
      ? controls.start({
          x: [0, 400, 0, 0],
          y: [0, -550, 0],
          scale: [1, 0.8, 1],
          opacity: [1, 0, 0, 1],
          transition: { duration: 1.55, ease: "backInOut" },
          backgroundColor: ["#81d47d3a", "#81d47d3a", "#ffffff"],
        })
      : controls.start({
          x: [0, -400, 0, 0],
          y: [0, -550, 0],
          scale: [1, 0.8, 1],
          opacity: [1, 0, 0, 1],
          transition: { duration: 1.55, ease: "backInOut" },
          backgroundColor: ["#e668682d", "#e668682d", "#ffffff"],
        });
  }, [isClicked]);

  useEffect(() => {
    api
      .get()
      .then((response) => setUsers(response.data.results[0]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <CardContext.Provider
      value={{
        users,
        setUsers,
        setGender,
        gender,
        nextCard,
        animation,
        setAnimation,
        controls,
        setIsClicked,
        isClicked,
        setOverlay,
        OverlayOne,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
