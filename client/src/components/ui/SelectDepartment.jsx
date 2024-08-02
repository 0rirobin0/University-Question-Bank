"use client";

import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import * as React from "react";

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

// Replace with your actual department data fetching logic
function fetchDepartments() {
  // Implement your API call or data retrieval method here
  // (e.g., using Axios, Fetch API, etc.)
  // This example returns a static array for demonstration
  return [
    { value: "Accounting", label: "Accounting" },
    { value: "Agricultural Economics", label: "Agricultural Economics" },
    { value: "Agricultural Engineering", label: "Agricultural Engineering" },
    { value: "Agricultural Extension", label: "Agricultural Extension" },
    { value: "Agronomy", label: "Agronomy" },
    { value: "Animal Husbandry", label: "Animal Husbandry" },
    { value: "Anthropology", label: "Anthropology" },
    { value: "Applied Chemistry", label: "Applied Chemistry" },
    { value: "Applied Mathematics", label: "Applied Mathematics" },
    { value: "Applied Physics", label: "Applied Physics" },
    { value: "Architecture", label: "Architecture" },
    { value: "Biochemistry", label: "Biochemistry" },
    { value: "Biotechnology", label: "Biotechnology" },
    { value: "Botany", label: "Botany" },
    { value: "Business Administration", label: "Business Administration" },
    { value: "Chemical Engineering", label: "Chemical Engineering" },
    { value: "Chemistry", label: "Chemistry" },
    { value: "Civil Engineering", label: "Civil Engineering" },
    { value: "Clinical Psychology", label: "Clinical Psychology" },
    {
      value: "Computer Science and Engineering",
      label: "Computer Science and Engineering",
    },
    { value: "Criminology", label: "Criminology" },
    { value: "Development Studies", label: "Development Studies" },
    { value: "Drama and Dramatics", label: "Drama and Dramatics" },
    { value: "Economics", label: "Economics" },
    { value: "Education", label: "Education" },
    {
      value: "Electrical and Electronic Engineering",
      label: "Electrical and Electronic Engineering",
    },
    { value: "English", label: "English" },
    { value: "Environmental Science", label: "Environmental Science" },
    { value: "Finance", label: "Finance" },
    { value: "Fisheries", label: "Fisheries" },
    { value: "Food Engineering", label: "Food Engineering" },
    { value: "Forestry", label: "Forestry" },
    { value: "Genetics", label: "Genetics" },
    { value: "Geography", label: "Geography" },
    { value: "Geology", label: "Geology" },
    { value: "History", label: "History" },
    { value: "Horticulture", label: "Horticulture" },
    {
      value: "Industrial and Production Engineering",
      label: "Industrial and Production Engineering",
    },
    { value: "Information Technology", label: "Information Technology" },
    { value: "International Relations", label: "International Relations" },
    { value: "Islamic Studies", label: "Islamic Studies" },
    {
      value: "Journalism and Media Studies",
      label: "Journalism and Media Studies",
    },
    { value: "Law", label: "Law" },
    {
      value: "Library and Information Science",
      label: "Library and Information Science",
    },
    { value: "Linguistics", label: "Linguistics" },
    { value: "Management", label: "Management" },
    { value: "Marketing", label: "Marketing" },
    { value: "Mass Communication", label: "Mass Communication" },
    { value: "Mathematics", label: "Mathematics" },
    { value: "Mechanical Engineering", label: "Mechanical Engineering" },
    { value: "Medicine", label: "Medicine" },
    { value: "Microbiology", label: "Microbiology" },
    { value: "Music", label: "Music" },
    { value: "Nuclear Engineering", label: "Nuclear Engineering" },
    {
      value: "Nutrition and Food Science",
      label: "Nutrition and Food Science",
    },
    { value: "Pharmacy", label: "Pharmacy" },
    { value: "Philosophy", label: "Philosophy" },
    { value: "Physics", label: "Physics" },
    { value: "Political Science", label: "Political Science" },
    { value: "Population Science", label: "Population Science" },
    { value: "Psychology", label: "Psychology" },
    { value: "Public Administration", label: "Public Administration" },
    { value: "Public Health", label: "Public Health" },
    { value: "Renewable Energy", label: "Renewable Energy" },
    { value: "Robotics", label: "Robotics" },
    { value: "Social Welfare", label: "Social Welfare" },
    { value: "Sociology", label: "Sociology" },
    { value: "Soil Science", label: "Soil Science" },
    { value: "Statistics", label: "Statistics" },
    {
      value: "Telecommunication Engineering",
      label: "Telecommunication Engineering",
    },
    { value: "Textile Engineering", label: "Textile Engineering" },
    {
      value: "Theatre and Performance Studies",
      label: "Theatre and Performance Studies",
    },
    {
      value: "Tourism and Hospitality Management",
      label: "Tourism and Hospitality Management",
    },
    {
      value: "Urban and Regional Planning",
      label: "Urban and Regional Planning",
    },
    { value: "Veterinary Science", label: "Veterinary Science" },
    {
      value: "Water Resources Engineering",
      label: "Water Resources Engineering",
    },
    { value: "Women and Gender Studies", label: "Women and Gender Studies" },
    { value: "Zoology", label: "Zoology" },
    { value: "Software Engineering", label: "Software Engineering" },
  ];
}

export function SelectDepartment() {
  const [open, setOpen] = React.useState(false);
  const [departments, setDepartments] = React.useState([]);
  const [selectedValue, setSelectedValue] = React.useState("");

  // Fetch departments on component mount (or when necessary)
  React.useEffect(() => {
    const fetchedDepartments = fetchDepartments();
    setDepartments(fetchedDepartments);
  }, []);

  const handleSelect = (currentValue) => {
    setSelectedValue(currentValue === selectedValue ? "" : currentValue);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full sm:w-[300px] md:w-[400px] mx-auto my-3 justify-between focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
        >
          {selectedValue
            ? departments.find(
                (department) => department.value === selectedValue
              )?.label
            : "Select department"}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] h-[280px] p-0" side="bottom">
        <Command>
          <CommandInput placeholder="Search department" className="h-9" />
          <CommandEmpty>No department found.</CommandEmpty>
          <CommandGroup>
            <CommandList>
              {departments.map((department) => (
                <CommandItem
                  key={department.value}
                  value={department.value}
                  onSelect={() => handleSelect(department.value)}
                  onClick={(event) => {
                    console.log("CommandItem clicked:", event);
                    // Add your logic here to handle the click
                  }}
                >
                  {department.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      selectedValue === department.value
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
