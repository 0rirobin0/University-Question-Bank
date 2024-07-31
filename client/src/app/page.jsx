"use client";
import { useContext } from "react";
import { GlobalContext } from "../globalcontext/globalcontext";

export default function Home() {
  const { msg, setmsg } = useContext(GlobalContext);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <p>{msg}</p>
      <button onClick={() => setmsg("Hello, Next.js!")}>Change Text</button>
    </main>
  );
}
