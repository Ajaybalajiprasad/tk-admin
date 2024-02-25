import { EVENT,  } from "@/libs/types";
import { IconTrash } from "@tabler/icons-react";
import { useCart } from "@/store";

export default function DisplayEventCard({ title, day, category, id }: EVENT) {
  const { removeEvent } = useCart((state) => state);
  return (
    <section className="flex justify-between bg-accentGrey w-full rounded-lg p-6">
      <section>
        <h1 className="flex items-center text-accentWhite text-xl font-bold gap-2">
          {title}{" "}
          <span>
            <IconTrash
              className="text-accentWhite cursor-pointer hover:text-red-500"
              size={24}
              onClick={
                () => {
                  removeEvent(id, day, category);
                }
              }
            />
          </span>
        </h1>
        <h1 className="text-accentWhite text-xs">
{day}        </h1>
      </section>
      <h1 className="text-accentWhite text-3xl font-bold">₹ 150</h1>
    </section>
  );
}
