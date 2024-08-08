"use client";
import Image from "next/image";
import { useContext } from "react";
import { CiSearch } from "react-icons/ci";
import homeImage from "../../public/images/home.jpg";
import { GlobalContext } from "../globalcontext/globalcontext";

// shadcn UI

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
// select Component
import { Button } from "@/components/ui/button";
import LoginButton from "@/components/ui/LoginButton";
import { SelectCourse } from "@/components/ui/SelectCourse";
import { SelectDepartment } from "@/components/ui/SelectDepartment";
import { SelectUniversity } from "@/components/ui/SelectUniversity";
import UploadQuestionsButton from "@/components/ui/UploadQuestionsButton";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export default function Home() {
  const router = useRouter();
  const { SelectedUniversity, SelectedDepartment, SelectedCourse } =
    useContext(GlobalContext);

  const gotoQuestionpage = () => {
    if (
      SelectedUniversity != "" ||
      SelectedDepartment != "" ||
      SelectedCourse != ""
    ) {
      router.push("/questions");
    } else {
      toast("Select atleast one Category!", {
        duration: 2000,
        className: "bg-destructive",
      });
    }
  };

  return (
    <>
      <div className="h-[50px] w-full flex justify-end items-center p-10">
        <LoginButton />
        <UploadQuestionsButton />
      </div>
      <main className="flex flex-col min-h-screen px-4 py-6 md:px-20 md:py-0 md:flex-row">
        {/* LeftSide */}
        <div className="leftpart w-full md:w-1/2 flex flex-col items-start justify-center p-4 md:p-20">
          <div className="headingtext text-left">
            {/* heading */}
            <div className="headline flex justify-between items-center my-3 p-0">
              <h1 className="text-3xl md:text-5xl text-primary font-bangla font-medium pt-5">
                খুজুন
              </h1>
              <CiSearch className="text-black-500 text-6xl md:text-8xl" />
            </div>
            {/* subheading */}
            <div className="subheading">
              <p className="font-semibold text-sm md:text-md m-0 p-0 text-left">
                বিশ্ববিদ্যালয়ের <br />
                পূর্ববর্তী সকল প্রশ্ন এখানেই !!!
              </p>
            </div>
          </div>

          <Image
            className="w-full md:w-auto"
            src={homeImage}
            alt="Home image"
            width={500}
            height={300}
            placeholder="blur"
            priority
          />
        </div>
        {/* RightSide */}
        <div className="rightpart w-full md:w-1/2 flex items-center justify-center md:justify-start">
          <Card className="w-full max-w-sm md:max-w-lg  mb-20 drop-shadow-xl ">
            <CardHeader>
              <CardTitle className=" flex justify-center mt-5">
                University Questions Bank
              </CardTitle>
              <CardDescription className="flex text-primary justify-center my-5">
                {" "}
                Find your Questions{" "}
              </CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col justify-center">
              <SelectUniversity />
              <span className="my-2"></span>
              <SelectDepartment />
              <span className="my-2"></span>
              <SelectCourse />
            </CardContent>
            <CardFooter className="flex justify-center md:justify-center">
              {
                <Button variant="secondarygreen" onClick={gotoQuestionpage}>
                  Find Questions
                </Button>
              }
            </CardFooter>
          </Card>
        </div>
      </main>
    </>
  );
}
