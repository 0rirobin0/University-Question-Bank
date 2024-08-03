import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function FilterYears() {
  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 5 }, (_, i) => currentYear - i);

  return (
    <div className="my-3 mr-[73px]">
      <RadioGroup defaultValue={`${currentYear}`}>
        {years.map((year) => (
          <div key={year} className="flex items-center space-x-2">
            <RadioGroupItem value={`${year}`} id={`${year}`} />
            <Label className="cursor-pointer" htmlFor={`${year}`}>
              {year}
            </Label>
          </div>
        ))}
      </RadioGroup>
    </div>
  );
}
