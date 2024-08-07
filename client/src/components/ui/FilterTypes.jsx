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
  }, [setSelectedType]);

  const handleValueChange = (value) => {
    setSelectedType(value);
    sessionStorage.setItem("SelectedType", value);
  };

  return (
    <div className="my-3">
      <RadioGroup value={SelectedType} onValueChange={handleValueChange}>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="semester" id="semester" />
          <Label className="cursor-pointer" htmlFor="Semester">
            Semester
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="term/class test" id="term/class Test" />
          <Label className="cursor-pointer" htmlFor="Term/Class Test">
            Term/Class Test
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="midterm" id="midterm" />
          <Label className="cursor-pointer" htmlFor="Midterm">
            Midterm
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="labs" id="labs" />
          <Label className="cursor-pointer" htmlFor="Labs">
            Labs
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="others" id="others" />
          <Label className="cursor-pointer" htmlFor="Others">
            Others
          </Label>
        </div>
      </RadioGroup>
      
    </div>
  );
}
