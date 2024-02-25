"use client";

import { EventsInDay } from "@/libs/types";
import { cn } from "@/libs/utils";
import { useCart } from "@/store";
import { IconInfoCircle, IconTrash } from "@tabler/icons-react";
import { useState } from "react";

interface prop {
  day: "DAY1" | "DAY2" | "DAY3";
  event: EventsInDay;
}

export default function CartPass({ day, event }: prop) {
  const { removePass, removeEvent } = useCart((state) => state);
  const [isInfoOpen, setInfoOpen] = useState<boolean>(true);

  let _date = { day: "", date: "" };
  if (day === "DAY1") _date = { day: "Thursday", date: "29-02-2024" };
  if (day === "DAY2") _date = { day: "Friday", date: "01-03-2024" };
  if (day === "DAY3") _date = { day: "Saturday", date: "02-03-2024" };

  const handleDeletePass = () => {
    removePass(day);
  };

  if (event.GEN.length === 0 && event.WK.length === 0 && event.PRO.length === 0)
    return null;

  return (
    <section className="text-cream border-y border-y-cream py-4 select-none">
      <div className="flex items-end justify-between">
        <h1 className="text-2xl lg:text-5xl">
          {event.PRO.length === 1 &&
            event.WK.length !== 0 &&
            `${day} Karthik + Workshop`}
          {event.PRO.length === 1 &&
            event.WK.length === 0 &&
            `${day} Karthik Show`}
          {event.PRO.length === 0 &&
            event.WK.length !== 0 &&
            `${day} Workshop Pass`}
          {event.PRO.length === 0 &&
            event.WK.length === 0 &&
            `${day} General Pass`}
        </h1>

        <h1 className="text-lg lg:text-3xl">
          {event.PRO.length === 1 && event.WK.length === 2 && "700"}
          {event.PRO.length === 1 && event.WK.length === 1 && "500"}
          {event.PRO.length === 1 && event.WK.length === 0 && "350"}
          {event.PRO.length === 0 && event.WK.length === 2 && "500"}
          {event.PRO.length === 0 && event.WK.length === 1 && "350"}
          {event.PRO.length === 0 && event.WK.length === 0 && "150"}
        </h1>
      </div>

      <h1 className="text-xs lg:text-xs inline-flex space-x-4">
        <span>Date: {_date.date}</span> <span>Day : {_date.day}</span>
        <section className="flex gap-2">
          <span
            className="cursor-pointer hover:text-blue-500"
            onClick={() => setInfoOpen(!isInfoOpen)}
          >
            <IconInfoCircle size={16} />
          </span>
          <span
            onClick={handleDeletePass}
            className="cursor-pointer hover:text-red-400"
          >
            <IconTrash size={16} />
          </span>
        </section>
      </h1>

      <section className={cn("ml-2", isInfoOpen && "hidden")}>
        {event.GEN.length !== 0 && <p className="text-lg">General</p>}
        <ol className="flex flex-col gap-y-1 ml-8 text-[12px] md:text-sm">
          {event.GEN.map((event_name) => (
            <li
              className="inline-flex gap-x-1 items-center"
              key={event_name.id}
            >
              {event_name.title}
              <span
                onClick={() => {
                  removeEvent(event_name.id, event_name.day, "GEN");
                }}
                className="cursor-pointer hover:text-red-400"
              >
                <IconTrash size={16} />
              </span>
            </li>
          ))}
        </ol>

        {event.WK.length !== 0 && <p className="text-lg">Workshop</p>}
        <ol className="flex flex-col gap-y-1 ml-8 text-[12px] md:text-sm">
          {event.WK.map((event_name) => (
            <li
              className="inline-flex gap-x-1 items-center"
              key={event_name.id}
            >
              {event_name.title}
              <span
                onClick={() => {
                  removeEvent(event_name.id, event_name.day, "WK");
                }}
                className="cursor-pointer hover:text-red-400"
              >
                <IconTrash size={16} />
              </span>
            </li>
          ))}
        </ol>

        {event.PRO.length !== 0 && <p className="text-lg">Pro Shows</p>}
        <ol className="flex flex-col gap-y-1 ml-8 text-[12px] md:text-sm">
          {event.PRO.map((event_name) => (
            <li
              className="inline-flex gap-x-1 items-center"
              key={event_name.id}
            >
              {event_name.title}
              <span
                onClick={() => {
                  removeEvent(event_name.id, event_name.day, "PRO");
                }}
                className="cursor-pointer hover:text-red-400"
              >
                <IconTrash size={16} />
              </span>
            </li>
          ))}
        </ol>
      </section>
    </section>
  );
}