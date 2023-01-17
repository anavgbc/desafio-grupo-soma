import { createContext, useEffect, useState } from "react";
import { api } from "../../services/api";

export const CardContext = createContext({});

export const CardContextProvider = ({ children }) => {
  const [user, setUser] = useState("");
  const [gender, setGender] = useState("all");
  const [isLoading, setLoading] = useState(false);

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
        isLoading,
      }}
    >
      {children}
    </CardContext.Provider>
  );
};
