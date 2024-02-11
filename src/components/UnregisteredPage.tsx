"use client";

import { useState } from "react";
import Button from "./Button";
import Cart from "./Cart";
import Input from "./Input";

export default function UnregisterPage() {
  const [user, setUser] = useState<string | null>(null);

  return (
    <section className="flex flex-col items-center space-y-4 w-full">
      {user !== null
        ? (
          <h1 className="text-accentWhite font-mono text-center">
            Displaying Cart of "Mukesh"
          </h1>
        )
        : (
          <form className="text-center space-y-2">
            <Input placeholder="Email" type="text" />
            <Input placeholder="Name" type="text" />
            <Input placeholder="Phone Number" type="text" />
            <Input placeholder="Collage Name" type="text" />
            <br />
            <Button onClick={() => setUser("hello")}>Register</Button>
          </form>
        )}

      {user !== null &&
        <Cart />}
    </section>
  );
}
