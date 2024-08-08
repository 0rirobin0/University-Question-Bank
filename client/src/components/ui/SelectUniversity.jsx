"use client";
import { GlobalContext } from "@/globalcontext/globalcontext";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import { useContext, useEffect, useState } from "react";

import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

// Replace with your actual university data fetching logic
function fetchUniversities() {
  // Implement your API call or data retrieval method here
  // (e.g., using Axios, Fetch API, etc.)
  // This example returns a static array for demonstration
  return [
    // Public Universities
    { value: "University of Dhaka", label: "University of Dhaka" },
    { value: "University of Rajshahi", label: "University of Rajshahi" },
    {
      value: "Bangladesh University of Engineering and Technology",
      label: "Bangladesh University of Engineering and Technology",
    },
    {
      value: "Khulna University of Engineering & Technology",
      label: "Khulna University of Engineering & Technology",
    },
    {
      value: "Chittagong University of Engineering & Technology",
      label: "Chittagong University of Engineering & Technology",
    },
    { value: "Islamic University", label: "Islamic University" },
    { value: "Jagannath University", label: "Jagannath University" },
    { value: "Jahangirnagar University", label: "Jahangirnagar University" },
    { value: "Khulna University", label: "Khulna University" },
    {
      value: "University of Science & Technology Chittagong",
      label: "University of Science & Technology Chittagong",
    },
    {
      value: "Bangabandhu Sheikh Mujibur Rahman Agricultural University",
      label: "Bangabandhu Sheikh Mujibur Rahman Agricultural University",
    },
    {
      value: "Bangladesh Army University of Science and Technology",
      label: "Bangladesh Army University of Science and Technology",
    },
    {
      value: "Pabna University of Science and Technology",
      label: "Pabna University of Science and Technology",
    },
    {
      value: "Shahjalal University of Science & Technology",
      label: "Shahjalal University of Science & Technology",
    },
    {
      value: "Hajee Mohammad Danesh Science & Technology University",
      label: "Hajee Mohammad Danesh Science & Technology University",
    },
    {
      value: "Bangladesh University of Professionals",
      label: "Bangladesh University of Professionals",
    },
    {
      value: "Noakhali Science and Technology University",
      label: "Noakhali Science and Technology University",
    },
    {
      value: "Cox's Bazar International University",
      label: "Cox's Bazar International University",
    },

    // Private Universities
    { value: "North South University", label: "North South University" },
    {
      value: "Independent University, Bangladesh",
      label: "Independent University, Bangladesh",
    },
    { value: "BRAC University", label: "BRAC University" },
    {
      value: "American International University-Bangladesh",
      label: "American International University-Bangladesh",
    },
    { value: "East West University", label: "East West University" },
    {
      value: "Daffodil International University",
      label: "Daffodil International University",
    },
    {
      value: "United International University",
      label: "United International University",
    },
    {
      value: "University of Asia Pacific",
      label: "University of Asia Pacific",
    },
    { value: "Southeast University", label: "Southeast University" },
    {
      value: "United International University",
      label: "United International University",
    },
    {
      value: "University of Development Alternative",
      label: "University of Development Alternative",
    },
    {
      value: "Bangladesh University of Business and Technology",
      label: "Bangladesh University of Business and Technology",
    },
    {
      value: "Asian University of Bangladesh",
      label: "Asian University of Bangladesh",
    },
    {
      value: "Green University of Bangladesh",
      label: "Green University of Bangladesh",
    },
    {
      value: "International University of Business Agriculture and Technology",
      label: "International University of Business Agriculture and Technology",
    },
    {
      value: "Manarat International University",
      label: "Manarat International University",
    },
    {
      value: "Noakhali Science and Technology University",
      label: "Noakhali Science and Technology University",
    },
    { value: "North South University", label: "North South University" },
    { value: "Prime University", label: "Prime University" },
    { value: "East West University", label: "East West University" },
  ];
}

export function SelectUniversity() {
  const [open, setOpen] = useState(false);
  const [universities, setUniversities] = useState([]);
  const { SelectedUniversity, setSelectedUniversity } =
    useContext(GlobalContext);
    
  // Fetch universities on component mount
  useEffect(() => {
    const fetchedUniversities = fetchUniversities();
    setUniversities(fetchedUniversities);
  }, []);


  const handleSelect = (currentValue) => {
    setOpen(false);
    setSelectedUniversity(currentValue);
  };
 

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full  overflow-hidden w-[250px] sm:w-[300px] md:w-[400px] mx-auto justify-between focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
        >
          {/* close Button */}
          {/* <IoIosClose className={cn("ml-auto h-4 w-4")} /> */}
          {SelectedUniversity
            ? universities.find(
                (university) => university.value === SelectedUniversity
              )?.label
            : "Select University"}

          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px]  p-0">
        <Command>
          <CommandInput
            placeholder="Search university"
            className="h-9 text-ellipsis"
          />
          <CommandEmpty>No university found.</CommandEmpty>
          <CommandGroup>
            <CommandList>
              {universities.map((university) => (
                <CommandItem
                  key={university.value}
                  value={university.value}
                  onSelect={() => handleSelect(university.value)}
                  onClick={(event) => {
                    console.log("CommandItem clicked:", event);
                    // Add your logic here to handle the click (optional)
                  }}
                >
                  {university.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      SelectedUniversity === university.value
                        ? "opacity-100"
                        : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandList>
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
