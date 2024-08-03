import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function FilterTypes() {
  return (
    <div className="my-3 ">
      <RadioGroup defaultValue="Semester">
        <div className="flex items-center  space-x-2">
          <RadioGroupItem value="Semester" id="Semester" />
          <Label className="cursor-pointer" htmlFor="Semester">
            Semester
          </Label>
        </div>
        <div className="flex items-center  space-x-2">
          <RadioGroupItem value="Term/Class Test" id="Term/Class Test" />
          <Label className="cursor-pointer" htmlFor="Term/Class Test">
            Term/Class Test
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Midterm" id="Midterm" />
          <Label className="cursor-pointer" htmlFor="Midterm">
            Midterm
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Labs" id="Labs" />
          <Label className="cursor-pointer" htmlFor="Labs">
            Labs
          </Label>
        </div>
        <div className="flex items-center space-x-2">
          <RadioGroupItem value="Others" id="Others" />
          <Label className="cursor-pointer" htmlFor="Others">
            Others
          </Label>
        </div>
      </RadioGroup>
    </div>
  );
}
