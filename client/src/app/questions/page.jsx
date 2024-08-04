"use client";
import UploadQuestionsButton from "@/components/ui/UploadQuestionsButton";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CiFilter, CiSearch } from "react-icons/ci";
import { IoIosArrowBack, IoIosMenu } from "react-icons/io";
import { LiaExchangeAltSolid } from "react-icons/lia";

// shadcn
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import FilterTypes from "@/components/ui/FilterTypes";
import { SelectCourse } from "@/components/ui/SelectCourse";
import { SelectDepartment } from "@/components/ui/SelectDepartment";
import { SelectUniversity } from "@/components/ui/SelectUniversity";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

import FilterYears from "@/components/ui/FilterYears";
import QuestionsTable from "@/components/ui/QuestionsTable";
import { toast } from "sonner";

export default function Page() {
  const router = useRouter();

  const showtoast = () => {
    toast("Question has been created.");
  };

  return (
    <>
      <div className="headsection w-full  h-[20vh] border-2">
        <div className="flex justify-between items-center px-4 my-1">
          {/* Icons for mobile view */}
          <div className="md:hidden flex items-center space-x-2">
            <div>
              <Drawer direction="left">
                <DrawerTrigger>
                  <IoIosMenu className="inline-block text-black-500  text-4xl bg-black-300  hover:text-primary" />
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <div className="w-full flex justify-center items-center">
                      <DrawerClose>
                        <Button variant="outline">
                          <IoIosArrowBack className="text-md mr-2 inline-block" />
                          Back
                        </Button>
                      </DrawerClose>
                    </div>

                    <DrawerTitle>University Questions Bank</DrawerTitle>
                    {/* for Mobile Screen */}
                    <DrawerDescription>
                      <div className="flex justify-center my-6 mx-6  md:flex">
                        <h3 className="font-bold text-primary">FILTERS</h3>
                        <CiFilter className="mx-2 text-xl font-bold" />
                      </div>
                      <div className="filters flex flex-col justify-center items-center">
                        <div className="text-center font-bold text-sm my-2  w-full h-auto bg-primary-foreground">
                          TYPES
                        </div>
                        <FilterTypes />

                        <div className="text-center font-bold text-sm my-2  w-full h-auto bg-primary-foreground">
                          YEARS
                        </div>
                        <FilterYears />
                      </div>
                    </DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter> </DrawerFooter>
                </DrawerContent>
              </Drawer>
            </div>
            <CiSearch
              className="text-black-500 text-4xl hover:text-primary "
              onClick={() => router.push("/")}
            />
          </div>
          {/* Back arrow hidden on mobile */}
          <div className="backoption flex justify-center items-center hidden md:block">
            <Link href="/">
              <IoIosArrowBack className="text-black-500 text-3xl mx-5" />
            </Link>
          </div>
          {/* QUE / RESOURCES SELECTION TOGGLE */}
          <div className="toggletabs ml-[200px] hidden md:block">
            <Tabs defaultValue="Questions">
              <TabsList>
                <TabsTrigger
                  value="Questions"
                  onClick={() => router.push("/questions")}
                >
                  Questions
                </TabsTrigger>
                <TabsTrigger
                  value="Resources"
                  onClick={() => router.push("/resources")}
                >
                  Resources
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
          <div>
            <UploadQuestionsButton />
          </div>
        </div>
        {/* Selection section hidden on mobile */}
        <div className="modify flex flex-col">
          {/* Head tag modify */}
          <div className="flex justify-start mx-6 hidden md:flex px-10 mb-1 ">
            <h3 className="font-bold text-primary">MODIFY SEARCH</h3>
            <LiaExchangeAltSolid className="mx-2 text-xl font-bold" />
          </div>

          <div className="selection hidden md:flex justify-center mb-3">
            <SelectUniversity />
            <SelectDepartment />
            <SelectCourse />
          </div>

          {/* Mobile Screen Only   toogles */}
          <div className="toggletabs flex justify-center my-3 items-center w-full sm:w-auto sm:mx-auto md:hidden">
            <Tabs defaultValue="Questions">
              <TabsList>
                <TabsTrigger
                  value="Questions"
                  onClick={() => router.push("/questions")}
                >
                  Questions
                </TabsTrigger>
                <TabsTrigger
                  value="Resources"
                  onClick={() => router.push("/resources")}
                >
                  Resources
                </TabsTrigger>
              </TabsList>
            </Tabs>
          </div>
        </div>
      </div>
      <main className="flex w-full h-[80vh]  ">
        {/* left */}

        <div className="left hidden  w-0 md:w-[20vw] h-[80vh] md:flex flex-col items-center border-2  ">
          <div className="flex justify-start my-5 mx-6 hidden md:flex">
            <h3 className="font-bold text-primary">FILTERS</h3>
            <CiFilter className="mx-2 text-xl font-bold" />
          </div>
          <div className="text-center font-bold text-sm my-2  w-full h-auto bg-primary-foreground">
            TYPES
          </div>
          <FilterTypes />

          <div className="text-center font-bold text-sm my-2  w-full h-auto bg-primary-foreground">
            YEARS
          </div>
          <FilterYears />
        </div>
        {/* Right */}

        <div className="right  w-full   md:w-[80vw] md:h-[80vh] border-2 ">
          {/* Data Table */}
          <QuestionsTable />
        </div>
      </main>
    </>
  );
}
