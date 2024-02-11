"use client";

import Button from "@/components/Button";
import RegisterPage from "@/components/RegisteredPage";
import UnregisterPage from "@/components/UnregisteredPage";
import { useState } from "react";

type TState = "participant-type" | "registered" | "unregistered";

export default function Home() {
  const [state, setState] = useState<TState>("participant-type");

  return (
    <main className="flex min-h-screen flex-col bg-accentBlack items-center justify-center p-8 lg:p-24">
      <h1 className="text-accentWhite mb-8 text-2xl font-mono text-center">
        {state === "participant-type" && "Is The Participant Registered ?"}
        {state === "registered" && "Enter Participant Email"}
        {state === "unregistered" && "Enter Participant Details"}
      </h1>

      {state === "participant-type" && (
        <section className="flex gap-4">
          <Button
            onClick={() => setState("registered")}
          >
            Registered
          </Button>

          <Button
            onClick={() => setState("unregistered")}
          >
            Unregistered
          </Button>
        </section>
      )}

      {state === "registered" && <RegisterPage />}
      {state === "unregistered" && <UnregisterPage />}
    </main>
  );
}
