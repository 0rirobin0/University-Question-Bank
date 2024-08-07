"use client";
import { createContext, useEffect, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [SelectedUniversity, setSelectedUniversity] = useState("");
  const [SelectedDepartment, setSelectedDepartment] = useState("");
  const [SelectedCourse, setSelectedCourse] = useState("");
  const [SelectedType, setSelectedType] = useState("");
  const [SelectedYear, setSelectedYear] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Load initial state from sessionStorage on client side
    setSelectedUniversity(sessionStorage.getItem("SelectedUniversity") || "");
    setSelectedDepartment(sessionStorage.getItem("SelectedDepartment") || "");
    setSelectedCourse(sessionStorage.getItem("SelectedCourse") || "");
    setSelectedType(sessionStorage.getItem("SelectedType") || "");
    setSelectedYear(sessionStorage.getItem("SelectedYear") || "");
    setLoading(false); // Assuming loading is false after initial state is set
  }, []);

  useEffect(() => {
    // Update sessionStorage whenever state changes
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
        setLoading,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
