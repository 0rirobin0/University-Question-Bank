"use client";
import { toast } from "sonner";

export default function page() {
  const showtoast = () => {
    toast("Question has been created.");
  };
  return (
    <div>
      <button className="px-4 py-2 border-2 rounded-sm" onClick={showtoast}>
        click me
      </button>
      questions
    </div>
  );
}
