import { createContext, useEffect, useState } from "react";
import { useAnimationControls } from "framer-motion";

export const AnimationContext = createContext({});

export const AnimationContextProvider = ({ children }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [animation, setAnimation] = useState("");

  const controls = useAnimationControls();

  useEffect(() => {
    animation === "accept" || animation === "superlike"
      ? controls.start({
          x: [0, 400, 0, 0],
          y: [0, -550, 0],
          scale: [1, 0.8, 1],
          opacity: [1, 0, 0, 1],
          transition: { duration: 1.5, ease: "backInOut" },
          backgroundColor: ["#81d47d3a", "#81d47d3a", "#ffffff"],
        })
      : controls.start({
          x: [0, -400, 0, 0],
          y: [0, -550, 0],
          scale: [1, 0.8, 1],
          opacity: [1, 0, 0, 1],
          transition: { duration: 1.5, ease: "backInOut" },
          backgroundColor: ["#e668682d", "#e668682d", "#ffffff"],
        });
  }, [isClicked]);

  return (
    <AnimationContext.Provider
      value={{
        animation,
        setAnimation,
        controls,
        setIsClicked,
        isClicked,
      }}
    >
      {children}
    </AnimationContext.Provider>
  );
};
