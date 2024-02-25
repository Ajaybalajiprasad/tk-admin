import { cn } from "@/libs/utils";
import { IconCirclePlus } from "@tabler/icons-react";
import { useCart } from "@/store";

interface props {
  category: "WK" | "GEN" | "PRO";
  title: string;
  day: "DAY1" | "DAY2" | "DAY3";
  id: string
}

export default function AddEventCard(
  { title, day, id, category }: props,
) {
  const { addEvent } = useCart((state) => state);
  const _date = new Date(day);
  return (
    <section
      className={cn(
        "flex justify-between w-full rounded-lg p-6",
        category === "GEN"
          ? "bg-accentGrey text-accentWhite"
          : "bg-amber-500 text-accentBlack",
      )}
    >
      <section>
        <h1 className="flex items-center text-xl font-bold gap-2">
          {title}{" "}
          <span>
            <IconCirclePlus
              className=" cursor-pointer hover:text-white"
              size={24}
              onClick={() => {
                addEvent({id, title, day, category});
              }}
            />
          </span>
        </h1>
        <h1 className=" text-xs">
          {`${_date.getUTCDate()}-${_date.getUTCMonth()}-${_date.getUTCFullYear()}`}
        </h1>
      </section>
      <h1 className=" text-3xl font-bold">₹ 150</h1>
    </section>
  );
}
