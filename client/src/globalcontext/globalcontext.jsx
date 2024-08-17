"use client";
import { createContext, useEffect, useState } from "react";

const GlobalContext = createContext();

const GlobalProvider = ({ children }) => {
  const [SelectedUniversity, setSelectedUniversity] = useState(
    typeof window !== "undefined"
      ? sessionStorage.getItem("SelectedUniversity") || ""
      : ""
  );
  const [SelectedDepartment, setSelectedDepartment] = useState(
    typeof window !== "undefined"
      ? sessionStorage.getItem("SelectedDepartment") || ""
      : ""
  );
  const [SelectedCourse, setSelectedCourse] = useState(
    typeof window !== "undefined"
      ? sessionStorage.getItem("SelectedCourse") || ""
      : ""
  );

  const [SelectedType, setSelectedType] = useState("");
  const [SelectedYear, setSelectedYear] = useState("");
  const [loading, setLoading] = useState(true);

  // Upload variable
  const [UploadDepartmentData, setUploadDepartmentData] = useState("");
  const [UploadUniversityData, setUploadUniversityData] = useState("");
  const [UploadCourseData, setUploadCourseData] = useState("");
  const [UploadTypeData, setUploadTypeData] = useState("");
  const [UploadYearData, setUploadYearData] = useState("");

  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("SelectedUniversity", SelectedUniversity);
    }
  }, [SelectedUniversity]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("SelectedDepartment", SelectedDepartment);
    }
  }, [SelectedDepartment]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      sessionStorage.setItem("SelectedCourse", SelectedCourse);
    }
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

        UploadUniversityData,
        setUploadUniversityData,
        UploadDepartmentData,
        setUploadDepartmentData,
        UploadCourseData,
        setUploadCourseData,
        UploadTypeData,
        setUploadTypeData,
        UploadYearData,
        setUploadYearData,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export { GlobalContext, GlobalProvider };
