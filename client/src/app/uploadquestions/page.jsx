"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { UploadCourse } from "@/components/ui/UploadCourse";
import UploadDepartment from "@/components/ui/UploadDepartment";
import UploadType from "@/components/ui/UploadType";
import { UploadUniversity } from "@/components/ui/UploadUniversity";
import UploadYears from "@/components/ui/UploadYear";
import { GlobalContext } from "@/globalcontext/globalcontext";
import axios from "axios";
import Image from "next/image";
import { useContext, useState } from "react";
import { toast } from "sonner";
import QuestionImage from "../../../public/images/Question.jpg";

export default function Page() {
  const [title, setTitle] = useState("");
  const [fileData, setFileData] = useState(null);

  const formData = new FormData();

  const {
    UploadDepartmentData,
    UploadUniversityData,
    UploadCourseData,
    UploadTypeData,
    UploadYearData,
  } = useContext(GlobalContext);

  // Handle File Validation
  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const allowedTypes = [
        "image/jpeg",
        "image/png",
        "image/webp",
        "image/jpg",
        "application/pdf",
      ];

      if (!allowedTypes.includes(file.type)) {
        toast.error("Invalid file type. Please upload an image or PDF.");
        event.target.value = ""; // Clear the input
        return;
      }

      // Check file size (5 MB = 5 * 1024 * 1024 bytes)
      const maxSize = 5 * 1024 * 1024;
      if (file.size > maxSize) {
        toast.error("File size exceeds 5 MB. Please upload a smaller file.");
        event.target.value = ""; // Clear the input
        return;
      }

      setFileData(file);
    }
  };

  // Handle Submit
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent page reload on form submission

    if (!fileData) {
        toast.error("Please upload a file before submitting.");
        return;
    }

    const formData = new FormData(); // Initialize inside handleSubmit

    // Append fields to FormData
    formData.append("file", fileData);
    formData.append("title", title);
    formData.append("university", UploadUniversityData || "");
    formData.append("department", UploadDepartmentData || "");
    formData.append("course", UploadCourseData || "");
    formData.append("year", UploadYearData || "");
    formData.append("type", UploadTypeData || "");
    formData.append("contentType", fileData.type);

    for (let pair of formData.entries()) {
        console.log(`${pair[0]}: ${pair[1]}`);
    }

    try {
        const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/question/post`,
            formData,
            {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
                timeout: 5000,
            }
        );

        toast.success("Question Submitted Successfully!", {
            duration: 2000,
            style: {
                backgroundColor: "#16a34a",
                color: "#fff",
            },
        });
    } catch (error) {
        toast.error("An error occurred during submission.");
        console.error(error);
    }
};


  return (
    <div className="w-full h-screen flex flex-col md:flex-row">
      {/* Left */}
      <div className="left w-full md:w-2/5 h-auto md:h-screen flex flex-col justify-center items-center p-4">
        <h1 className="font-semibold text-2xl md:text-3xl text-primary mb-4 text-center">
          Upload Questions
        </h1>

        <Image
          src={QuestionImage}
          className="w-3/4 md:w-full"
          alt="Question image"
          width={400}
          height={400}
          placeholder="blur"
          priority
        />
      </div>

      {/* Right */}
      <div className="right w-full md:w-3/5 h-auto md:h-screen flex justify-center items-center p-4">
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center max-w-lg"
        >
          <div className="mb-4">
            <input
              type="text"
              id="title"
              name="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Question Title"
              required
              className="mt-1 block w-[250px] sm:w-[300px] md:w-[400px] px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-green-600 focus:border-green-600 sm:text-sm"
            />
          </div>
          <div className="flex flex-col space-y-4 mb-6">
            <UploadUniversity />
            <UploadDepartment />
            <UploadCourse />
            <UploadType />
            <UploadYears />
          </div>
          <div>
            <div className="flex justify-start">
              <Label className="my-2" htmlFor="question">
                Picture or PDF
              </Label>
              <span className="text-red-600 font-semibold">*</span>
            </div>

            <Input
              className="w-[250px] sm:w-[300px] md:w-[400px]"
              id="file" // Ensure id matches
              name="file" // Ensure name matches
              type="file"
              accept="image/*,.pdf"
              onChange={handleFileChange}
            />
          </div>
          <button
            type="submit"
            className="my-6 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-primary hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500"
          >
            Submit Question
          </button>
        </form>
      </div>
    </div>
  );
}
