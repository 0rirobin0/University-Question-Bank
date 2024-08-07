"use client";
import { createContext, useState, useEffect } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  // Initialize state from sessionStorage or set default values
  const [msg, setmsg] = useState(() => sessionStorage.getItem("msg") || "Hello, world!");
  const [SelectedUniversity, setSelectedUniversity] = useState(() => sessionStorage.getItem("SelectedUniversity") || "");
  const [SelectedDepartment, setSelectedDepartment] = useState(() => sessionStorage.getItem("SelectedDepartment") || "");
  const [SelectedCourse, setSelectedCourse] = useState(() => sessionStorage.getItem("SelectedCourse") || "");
  const [SelectedType, setSelectedType] = useState(() => sessionStorage.getItem("SelectedType") || "");
  const [SelectedYear, setSelectedYear] = useState(() => sessionStorage.getItem("SelectedYear") || "");
  const [loading, setLoading] = useState(true);

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

  useEffect(() => {
    sessionStorage.setItem("SelectedType", SelectedType);
  }, [SelectedType]);

  useEffect(() => {
    sessionStorage.setItem("SelectedYear", SelectedYear);
  }, [SelectedYear]);

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
        SelectedType,
        setSelectedType,
        SelectedYear,
        setSelectedYear,
        loading,
         setLoading
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
