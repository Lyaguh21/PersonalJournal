import { createContext } from "react";
import { useState } from "react";

export const UserContext = createContext({
  userId: 1,
});

export const UserContextProvider = ({ children }) => {
  const [userId, setUserID] = useState(1);
  return (
    <UserContext.Provider value={{ userId: userId, setUserID }}>
      {children}
    </UserContext.Provider>
  );
};
