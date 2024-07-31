"use client";
import Image from "next/image";
import Link from "next/link";
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
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { buttonVariants } from "@/components/ui/button";

export default function Home() {
  const { msg, setmsg } = useContext(GlobalContext);

  return (
    <main className="flex min-h-screen items-center justify-between px-20 py-0">
      {/* LeftSide */}
      <div className="leftpart w-1/2 h-screen   flex flex-col items-start justify-center p-20">
        <div className=" headingtext text-left">
          {/* heading */}
          <div className="headline flex justify-between items-center my-3 p-0 ">
            <h1 className="text-5xl text-primary font-bangla font-medium pt-5">
              খুজুন
            </h1>
            <CiSearch className="text-black-500 text-8xl" />
          </div>
          {/* subheading */}
          <div className="subheading">
            <p className="font-semibold text-md m-0 p-0 text-left">
              বিশ্ববিদ্যালয়ের <br />
              পূর্ববর্তী সকল প্রশ্ন এখানেই !!!
            </p>
          </div>
        </div>

        <Image
          className=""
          src={homeImage}
          alt="Home image"
          width={500}
          height={300}
          priority
        />
      </div>
      {/* RightSide */}
      <div className="rightpart w-1/2 h-screen  flex  items-center justify-center ">
        <Card>
          <CardHeader>
            <CardTitle>Get Your Questions</CardTitle>
            <CardDescription>Card Description</CardDescription>
          </CardHeader>
          <CardContent className="px-auto flex flex-col justify-center">
            <Select>
              <SelectTrigger className="w-[400px] my-2">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[400px] my-2">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>

            <Select>
              <SelectTrigger className="w-[400px] my-2">
                <SelectValue placeholder="Theme" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Light</SelectItem>
                <SelectItem value="dark">Dark</SelectItem>
                <SelectItem value="system">System</SelectItem>
              </SelectContent>
            </Select>
          </CardContent>
          <CardFooter className="flex justify-center items-center ">
            <Link
              href="/questions"
              className={buttonVariants({
                variant: "secondarygreen",

                size: "lg",
              })}
            >
              Find Questions
            </Link>
          </CardFooter>
        </Card>
      </div>
    </main>
  );
}
