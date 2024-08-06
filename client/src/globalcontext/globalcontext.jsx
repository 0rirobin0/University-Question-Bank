"use client";
import { createContext, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [msg, setmsg] = useState("Hello, world!");
  const [SelectedUniversity, setSelectedUniversity] = useState("");
  const [SelectedDepartment, setSelectedDepartment] = useState("");
  const [SelectedCourse, setSelectedCourse] = useState("");

  return (
    <GlobalContext.Provider
      value={{
        msg,
        setmsg,
        SelectedUniversity,
        setSelectedUniversity,
        SelectedDepartment,
        setSelectedDepartment,
        SelectedCourse,
        setSelectedCourse,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
