import { cn } from "@/libs/utils";
import { MouseEventHandler, ReactNode } from "react";

interface props {
  children: ReactNode;
  onClick?: MouseEventHandler<HTMLButtonElement>;
  varient?: "black" | "grey";
}

export default function Button(
  { children, varient = "black", onClick }: props,
) {
  return (
    <button
      onClick={onClick}
      className={cn(
        "p-2 px-5 text-lg rounded-lg shadow-black font-bold",
        varient === "black"
          ? "bg-accentGrey text-accentWhite hover:bg-accentGrey-hover"
          : "bg-[#FBE64D] text-accentGrey hover:bg-[#FBEA70]",
      )}
    >
      {children}
    </button>
  );
}
