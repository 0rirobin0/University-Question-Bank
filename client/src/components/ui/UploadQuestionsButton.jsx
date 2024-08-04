"use client";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function UploadQuestionsButton() {
  return (
    <div className="ml-auto ">
      <Link
        href="/uploadquestions"
        className={buttonVariants({
          variant: "outlinered",
        })}
      >
        Upload Questions
      </Link>
    </div>
  );
}
