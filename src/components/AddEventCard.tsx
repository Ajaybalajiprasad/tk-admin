import { TEvents } from "@/libs/types";
import { cn } from "@/libs/utils";
import { IconCirclePlus } from "@tabler/icons-react";

interface props extends TEvents {
  varient?: "pass" | "regular";
}

export default function AddEventCard(
  { name, date, fee, varient = "regular" }: props,
) {
  const _date = new Date(date);
  return (
    <section
      className={cn(
        "flex justify-between w-full rounded-lg p-6",
        varient === "regular"
          ? "bg-accentGrey text-accentWhite"
          : "bg-amber-500 text-accentBlack",
      )}
    >
      <section>
        <h1 className="flex items-center text-xl font-bold gap-2">
          {name}{" "}
          <span>
            <IconCirclePlus
              className=" cursor-pointer hover:text-white"
              size={24}
            />
          </span>
        </h1>
        <h1 className=" text-xs">
          {`${_date.getUTCDate()}-${_date.getUTCMonth()}-${_date.getUTCFullYear()}`}
        </h1>
      </section>
      <h1 className=" text-3xl font-bold">₹ {fee}</h1>
    </section>
  );
}
