"use client";

import { GlobalContext } from "@/globalcontext/globalcontext";
import { CaretSortIcon, CheckIcon } from "@radix-ui/react-icons";
import * as React from "react";
import { useContext } from "react";

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

// Replace with your actual upload types fetching logic
function fetchUploadTypes() {
  // This example returns a static array for demonstration
  return [
    { value: "semester", label: "Semester" },
    { value: "term/class test", label: "Term/Class Test" },
    { value: "midterm", label: "Midterm" },
    { value: "labs", label: "Labs" },
    { value: "others", label: "Others" },
  ];
}

export default function UploadType() {
  const [open, setOpen] = React.useState(false);
  const [uploadTypes, setUploadTypes] = React.useState([]);

  const { UploadTypeData, setUploadTypeData } = useContext(GlobalContext); // GlobalContext

  // Fetch upload types on component mount
  React.useEffect(() => {
    const fetchedUploadTypes = fetchUploadTypes();
    setUploadTypes(fetchedUploadTypes);
  }, []);

  const handleSelect = (currentValue) => {
    setUploadTypeData(currentValue);
    setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="overflow-hidden w-[250px] sm:w-[300px] md:w-[400px] mx-auto justify-between focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&>span]:line-clamp-1"
        >
          {UploadTypeData
            ? uploadTypes.find((type) => type.value === UploadTypeData)?.label
            : "Select Type"}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] h-[280px] p-0" side="bottom">
        <Command>
          <CommandInput placeholder="Search upload type" className="h-9" />
          <CommandEmpty>No upload type found.</CommandEmpty>
          <CommandGroup>
            <CommandList>
              {uploadTypes.map((type) => (
                <CommandItem
                  key={type.value}
                  value={type.value}
                  onSelect={() => handleSelect(type.value)}
                  onClick={(event) => {
                    console.log("CommandItem clicked:", event);
                    // Add your logic here to handle the click
                  }}
                >
                  {type.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      UploadTypeData === type.value
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
