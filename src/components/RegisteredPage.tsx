"use client";

import { useState } from "react";
import Button from "./Button";
import Input from "./Input";
import Cart from "./Cart";

export default function RegisterPage() {
  const [user, setUser] = useState<string | null>(null);
  return (
    <section className="flex flex-col space-y-4 w-full">
      <form onSubmit={(e) => e.preventDefault()} className="lg:flex lg:space-x-4 lg:justify-center space-y-2 text-center lg:space-y-0">
        <Input placeholder="Email Here" type="text" />
        <Button onClick={() => setUser("h")}>Search</Button>
      </form>

      {user !== null &&
        <Cart />}
    </section>
  );
}
