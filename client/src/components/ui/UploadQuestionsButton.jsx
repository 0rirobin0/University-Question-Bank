"use client";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";

export default function UploadQuestionsButton() {
  return (
    <div className=" mx-2">
      <Link
        href="/uploadquestions"
        className={buttonVariants({
          variant: "destructive",
        })}
      >
        Upload Questions
      </Link>
    </div>
  );
}
