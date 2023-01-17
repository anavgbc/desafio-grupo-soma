import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";
import { useAnimationControls } from "framer-motion";

export const CardContext = createContext({});

export const CardContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [gender, setGender] = useState("all");
  const [isClicked, setIsClicked] = useState(false);
  const [animation, setAnimation] = useState("");
  const [isLoading, setLoading] = useState(false);

  const controls = useAnimationControls();

  function nextCard() {
    setLoading(true);
    api
      .get(`?gender=${gender}`)
      .then((response) => {
        setUser(response.data.results[0]);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    animation === "accept" || animation === "superlike"
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
      .then((response) => setUser(response.data.results[0]))
      .catch((err) => console.log(err));
  }, []);

  return (
    <CardContext.Provider
      value={{
        user,
        setUser,
        setGender,
        gender,
        nextCard,
        animation,
        setAnimation,
        controls,
        setIsClicked,
        isClicked,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
