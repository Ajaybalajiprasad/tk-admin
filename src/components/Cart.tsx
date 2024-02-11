"use client";

import { useState } from "react";
import { TEvents } from "@/libs/types";
import DisplayEventCard from "./DisplayEventCard";
import AddEventCard from "./AddEventCard";
import { IconSearch } from "@tabler/icons-react";
import Button from "./Button";
import Input from "./Input";

export default function Cart() {
  let sum = 0;
  const [events, setEvents] = useState<TEvents[]>(
    [
      {
        name: "Tech Expo",
        event_id: 31,
        fee: 10,
        date: "2024-02-15T14:00:00.000Z",
      },
      {
        name: "Music Festival",
        event_id: 33,
        fee: 15,
        date: "2024-03-20T19:00:00.000Z",
      },
      {
        name: "Fitness Challenge",
        event_id: 36,
        fee: 5,
        date: "2024-04-10T08:00:00.000Z",
      },
      {
        name: "Artisan Market",
        event_id: 40,
        fee: 8,
        date: "2024-05-25T12:30:00.000Z",
      },
      {
        name: "Science Symposium",
        event_id: 42,
        fee: 12,
        date: "2024-06-18T15:45:00.000Z",
      },
      {
        name: "Food Tasting",
        event_id: 45,
        fee: 7,
        date: "2024-07-12T17:00:00.000Z",
      },
      {
        name: "Gaming Tournament",
        event_id: 49,
        fee: 20,
        date: "2024-08-30T20:00:00.000Z",
      },
      {
        name: "Environmental Cleanup",
        event_id: 53,
        fee: 0,
        date: "2024-09-22T09:30:00.000Z",
      },
      {
        name: "Film Screening",
        event_id: 57,
        fee: 10,
        date: "2024-10-15T18:00:00.000Z",
      },
      {
        name: "Fashion Show",
        event_id: 60,
        fee: 15,
        date: "2024-11-08T19:30:00.000Z",
      },
    ],
  );

  return (
    <section className="flex flex-col space-y-4 w-full lg:space-y-0 lg:space-x-4 lg:flex-row">
      <section className="bg-accentWhite w-full h-[500px] overflow-y-auto rounded-2xl p-4 space-y-4">
        <h1 className="text-3xl font-bold font-mono">User Cart</h1>
        <section className="flex flex-col gap-2">
          {events.map((val) => {
            sum += val.fee;
            return (
              <DisplayEventCard
                name={val.name}
                fee={val.fee}
                date={val.date}
                event_id={val.event_id}
              />
            );
          })}
        </section>
        <h1 className="bg-accentWhite border-4 border-accentGrey text-accentGrey text-4xl font-bold text-right rounded-lg p-6">
          Total ₹{sum}
        </h1>
        <Button>Confirm Booking</Button>
      </section>

      <section className="h-[500px] w-full bg-accentWhite rounded-2xl p-4 overflow-y-auto space-y-4">
        <h1 className="text-3xl font-bold font-mono">Available Events</h1>
        <section className="flex space-x-2">
          <Input type="text" placeholder="Search" />
          <Button>
            <IconSearch />
          </Button>
        </section>
        <section className="flex flex-col gap-2">
          {events.map((val) => {
            sum += val.fee;
            return (
              <AddEventCard
                varient={val.event_id % 2 === 0 ? "pass" : "regular"}
                name={val.name}
                fee={val.fee}
                date={val.date}
                event_id={val.event_id}
              />
            );
          })}
        </section>
      </section>
    </section>
  );
}
