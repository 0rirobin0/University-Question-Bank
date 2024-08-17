"use client";

import UploadQuestionsButton from "@/components/ui/UploadQuestionsButton";
import { GlobalContext } from "@/globalcontext/globalcontext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { CiFilter, CiSearch } from "react-icons/ci";

import { IoIosArrowBack, IoIosMenu } from "react-icons/io";
import { IoBackspaceOutline } from "react-icons/io5";
import { LiaExchangeAltSolid } from "react-icons/lia";

// shadcn
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
  const {
    setSelectedUniversity,
    setSelectedDepartment,
    setSelectedCourse,
    setSelectedType,
    setSelectedYear,
  } = useContext(GlobalContext);

  const router = useRouter();

  const SearchdeselectToast = () => {
    toast.success("Search has been Cleared !", {
      duration: 2000,
      style: {
        backgroundColor: "#16a34a",
        color: "#fff",
      },
    });
  };

  const FilterdeselectToast = () => {
    toast.success("Filter has been Cleared! ", {
      duration: 2000,
      style: {
        backgroundColor: "#16a34a",
        color: "#fff",
      },
    });
  };
  const handledeselect = () => {
    setSelectedUniversity("");
    setSelectedDepartment("");
    setSelectedCourse("");

    sessionStorage.removeItem("SelectedUniversity");
    sessionStorage.removeItem("SelectedCourse");
    sessionStorage.removeItem("SelectedDepartment");
    SearchdeselectToast();
  };
  const handledFilterdeselect = () => {
    sessionStorage.removeItem("SelectedType");
    sessionStorage.removeItem("SelectedYear");
    setSelectedType("");
    setSelectedYear("");
    FilterdeselectToast();
  };

  return (
    <>
      <div className="headsection w-full  h-[20vh] ">
        <div className="flex justify-between items-center px-4 my-1 ">
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
            {/* Dialog box to modify Search in MobileScreen */}
            <Dialog>
              <DialogTrigger>
                <CiSearch className="text-black-500 text-4xl hover:text-primary " />
              </DialogTrigger>
              <DialogContent>
                <DialogHeader>
                  <DialogDescription className="px-auto">
                    {/* Modify card from homepage */}

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
                      <CardContent className="flex flex-col justify-center mx-auto">
                        <SelectUniversity />
                        <span className="my-2"></span>
                        <SelectDepartment />
                        <span className="my-2"></span>
                        <SelectCourse />
                      </CardContent>
                    </Card>
                  </DialogDescription>
                </DialogHeader>
              </DialogContent>
            </Dialog>
          </div>
          {/* Back arrow hidden on mobile */}
          <div className="backoption justify-center items-center hidden md:block">
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
          <div className="justify-between items-center mx-6 hidden md:flex mt-2  ">
            <h3 className="font-bold  flex text-primary">
              MODIFY SEARCH
              <LiaExchangeAltSolid className="mx-2 text-xl  text-black font-bold" />
            </h3>

            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="outline" size="sm" className="mb-1 ml-2">
                  Clear
                  <IoBackspaceOutline className="mx-2  text-destructive text-xl font-bold" />{" "}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={handledeselect}>
                  Modify Search
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handledFilterdeselect}>
                  Filters
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>

          <div className="selection hidden md:flex justify-center  ">
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
          {/* Filter clear For mobileview only  */}
          <div className="md:hidden flex w-full justify-end">
            <DropdownMenu>
              <DropdownMenuTrigger>
                <Button variant="outline" size="sm" className=" mx-2 my-1">
                  Clear
                  <IoBackspaceOutline className=" mx-2  text-destructive text-xl font-bold" />{" "}
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent>
                <DropdownMenuItem onClick={handledeselect}>
                  Modify Search
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handledFilterdeselect}>
                  Filters
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </div>
      <main className="flex w-full h-[80vh] mt-3 ">
        {/* left */}

        <div className="left hidden  w-0 md:w-[20vw] h-[80vh] md:flex flex-col items-center border-2  ">
          <div className=" justify-start my-5 mx-6 hidden md:flex">
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

        <div className="right  w-full   md:w-[80vw] md:h-[80vh] border-1 ">
          {/* Data Table */}
          <QuestionsTable />
        </div>
      </main>
    </>
  );
}
