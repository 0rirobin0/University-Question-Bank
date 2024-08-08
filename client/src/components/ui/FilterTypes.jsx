"use client";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { GlobalContext } from "@/globalcontext/globalcontext";
import { useContext, useEffect } from "react";

export default function FilterTypes() {
  const { SelectedType, setSelectedType } = useContext(GlobalContext);

  useEffect(() => {
    const sessionType = sessionStorage.getItem("SelectedType");
    if (sessionType) {
      setSelectedType(sessionType);
    }
  }, []);

  const handleClick = (value) => {
    if (SelectedType === value) {
      // Clear the selection if the same value is clicked again
      setSelectedType("");
      sessionStorage.removeItem("SelectedType");
    } else {
      // Otherwise, set the new value
      setSelectedType(value);
      sessionStorage.setItem("SelectedType", value);
    }
  };

  return (
    <div className="my-3">
      <RadioGroup value={SelectedType}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="semester"
            id="semester"
            onClick={() => handleClick("semester")}
          />
          <Label className="cursor-pointer" htmlFor="semester">
            Semester
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="term/class test"
            id="term/class test"
            onClick={() => handleClick("term/class test")}
          />
          <Label className="cursor-pointer" htmlFor="term/class test">
            Term/Class Test
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="midterm"
            id="midterm"
            onClick={() => handleClick("midterm")}
          />
          <Label className="cursor-pointer" htmlFor="midterm">
            Midterm
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="labs"
            id="labs"
            onClick={() => handleClick("labs")}
          />
          <Label className="cursor-pointer" htmlFor="labs">
            Labs
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem
            value="others"
            id="others"
            onClick={() => handleClick("others")}
          />
          <Label className="cursor-pointer" htmlFor="others">
            Others
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
}
