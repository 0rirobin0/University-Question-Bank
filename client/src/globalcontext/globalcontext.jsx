"use client";
import { createContext, useState, useEffect } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  // Retrieve values from sessionStorage, if available
  const [SelectedUniversity, setSelectedUniversity] = useState(() => {
    return sessionStorage.getItem('selectedUniversity') || "";
  });
  const [SelectedDepartment, setSelectedDepartment] = useState(() => {
    return sessionStorage.getItem('selectedDepartment') || "";
  });
  const [SelectedCourse, setSelectedCourse] = useState(() => {
    return sessionStorage.getItem('selectedCourse') || "";
  });
  const [SelectedType, setSelectedType] = useState("");
  const [SelectedYear, setSelectedYear] = useState("");
  const [loading, setLoading] = useState(true);

  // Save values to sessionStorage whenever they change
  useEffect(() => {
    sessionStorage.setItem('selectedUniversity', SelectedUniversity);
  }, [SelectedUniversity]);

  useEffect(() => {
    sessionStorage.setItem('selectedDepartment', SelectedDepartment);
  }, [SelectedDepartment]);

  useEffect(() => {
    sessionStorage.setItem('selectedCourse', SelectedCourse);
  }, [SelectedCourse]);

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
