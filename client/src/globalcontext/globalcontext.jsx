"use client";
import { createContext, useState, useEffect } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  // Initialize state from sessionStorage or set default values
  const [msg, setmsg] = useState(() => sessionStorage.getItem("msg") || "Hello, world!");
  const [SelectedUniversity, setSelectedUniversity] = useState(() => sessionStorage.getItem("SelectedUniversity") || "");
  const [SelectedDepartment, setSelectedDepartment] = useState(() => sessionStorage.getItem("SelectedDepartment") || "");
  const [SelectedCourse, setSelectedCourse] = useState(() => sessionStorage.getItem("SelectedCourse") || "");

  // Update sessionStorage whenever state changes
  useEffect(() => {
    sessionStorage.setItem("msg", msg);
  }, [msg]);

  useEffect(() => {
    sessionStorage.setItem("SelectedUniversity", SelectedUniversity);
  }, [SelectedUniversity]);

  useEffect(() => {
    sessionStorage.setItem("SelectedDepartment", SelectedDepartment);
  }, [SelectedDepartment]);

  useEffect(() => {
    sessionStorage.setItem("SelectedCourse", SelectedCourse);
  }, [SelectedCourse]);

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
