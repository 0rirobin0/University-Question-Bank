"use client";

import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { GlobalContext } from "@/globalcontext/globalcontext";
import { useContext, useEffect } from "react";

export default function FilterYears() {
  const { SelectedYear, setSelectedYear } = useContext(GlobalContext);
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, i) => currentYear - i);

  useEffect(() => {
    const sessionYear = sessionStorage.getItem("SelectedYear");
    if (sessionYear) {
      setSelectedYear(sessionYear);
    }
  }, [setSelectedYear]);

  const handleClick = (value) => {
    if (SelectedYear === value) {
      // Clear the selection if the same value is clicked again
      setSelectedYear("");
      sessionStorage.removeItem("SelectedYear");
    } else {
      // Otherwise, set the new value
      setSelectedYear(value);
      sessionStorage.setItem("SelectedYear", value);
    }
  };

  return (
    <div className="my-3 mr-[73px]">
      <RadioGroup value={SelectedYear}>
        {years.map((year) => (
          <div key={year} className="flex items-center space-x-2">
            <RadioGroupItem
              value={`${year}`}
              id={`${year}`}
              onClick={() => handleClick(`${year}`)}
            />
            <Label className="cursor-pointer" htmlFor={`${year}`}>
              {year}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
