import { TEvents } from "@/libs/types";
import { IconTrash } from "@tabler/icons-react";

export default function DisplayEventCard({ name, date, fee }: TEvents) {
  const _date = new Date(date);
  return (
    <section className="flex justify-between bg-accentGrey w-full rounded-lg p-6">
      <section>
        <h1 className="flex items-center text-accentWhite text-xl font-bold gap-2">
          {name}{" "}
          <span>
            <IconTrash
              className="text-accentWhite cursor-pointer hover:text-red-500"
              size={24}
            />
          </span>
        </h1>
        <h1 className="text-accentWhite text-xs">
          {`${_date.getUTCDate()}-${_date.getUTCMonth()}-${_date.getUTCFullYear()}`}
        </h1>
      </section>
      <h1 className="text-accentWhite text-3xl font-bold">₹ {fee}</h1>
    </section>
  );
}
