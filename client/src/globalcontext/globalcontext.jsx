"use client";
import { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [msg, setmsg] = useState("Hello, world!");

  return (
    <GlobalContext.Provider value={
      { msg, setmsg }
      }>
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
