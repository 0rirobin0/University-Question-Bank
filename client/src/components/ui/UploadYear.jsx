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

// Function to fetch years
function fetchUploadYears() {
  const currentYear = new Date().getFullYear();
  const numberOfYears = 10; // Number of years to generate
  return Array.from({ length: numberOfYears }, (_, i) => ({
    value: currentYear - i,
    label: currentYear - i
  }));
}

export default function UploadYears() {
  const [open, setOpen] = React.useState(false);
  const [years, setYears] = React.useState([]);

  const { UploadYearData, setUploadYearData } = useContext(GlobalContext); // GlobalContext

  // Fetch years on component mount
  React.useEffect(() => {
    const fetchedYears = fetchUploadYears();
    setYears(fetchedYears);
  }, []);

  const handleSelect = (currentValue) => {
    setUploadYearData(currentValue);
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
          {UploadYearData
            ? years.find((year) => year.value === UploadYearData)?.label
            : "Select Year"}
          <CaretSortIcon className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[400px] h-[280px] p-0" side="bottom">
        <Command>
          <CommandInput placeholder="Search year" className="h-9" />
          <CommandEmpty>No year found.</CommandEmpty>
          <CommandGroup>
            <CommandList>
              {years.map((year) => (
                <CommandItem
                  key={year.value}
                  value={year.value}
                  onSelect={() => handleSelect(year.value)}
                  onClick={(event) => {
                    console.log("CommandItem clicked:", event);
                    // Add your logic here to handle the click
                  }}
                >
                  {year.label}
                  <CheckIcon
                    className={cn(
                      "ml-auto h-4 w-4",
                      UploadYearData === year.value
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
