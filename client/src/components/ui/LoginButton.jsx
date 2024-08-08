import Link from "next/link";
import { buttonVariants } from "./button";
export default function LoginButton() {
  return (
    <div className="ml-auto ">
      <Link
        href="/login"
        className={buttonVariants({
          variant: "outline_green",
        })}
      >
        Login
      </Link>
    </div>
  );
}
