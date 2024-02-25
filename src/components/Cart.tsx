"use client";

import { useState } from "react";
import { useEffect } from "react";
import { infoType } from "@/libs/types";
import CartPass from "./CartPass";
import AddEventCard from "./AddEventCard";
import { IconSearch } from "@tabler/icons-react";
import Button from "./Button";
import Input from "./Input";
import { PARSE } from "@/libs/utils";
import { useCart } from "@/store";

export default function Cart() {
  let sum = 0;
  const {cart} = useCart();
  const [event_ids, setEventIDs] = useState<string[]>([]  );
  const [events, setEvents] = useState<infoType[]>(
    []
  );
  
  sum += (cart.DAY1.WK.length === 1) ? 350 : (cart.DAY1.WK.length === 2 ? 500 : (cart.DAY1.GEN.length > 0 ? 150 : 0));
  sum += (cart.DAY2.WK.length === 1) ? 350 : (cart.DAY2.WK.length === 2 ? 500 : (cart.DAY2.GEN.length > 0 ? 150 : 0));
  sum += (cart.DAY3.WK.length === 1) ? 350 : (cart.DAY3.WK.length === 2 ? 500 : (cart.DAY3.GEN.length > 0 ? 150 : 0));

  useEffect(() => {
    const fetchFolders = async () => {
        const res = await fetch("/api/events/folder");
        const data = (await res.json()) as { payload: { blob: { rawLines: Array<string> } } };
        const eventsData = PARSE(data.payload.blob.rawLines) as Record<string, infoType>;
        console.log(eventsData);
        setEvents(Object.values(eventsData) as infoType[]);
        setEventIDs(Object.keys(eventsData) as string[]);  
    };
    fetchFolders();
    
}, []);

  return (
    <section className="flex flex-col space-y-4 w-full lg:space-y-0 lg:space-x-4 lg:flex-row">
      <section className="bg-accentWhite w-full h-[500px] overflow-y-auto rounded-2xl p-4 space-y-4">
        <h1 className="text-3xl font-bold font-mono">User Cart</h1>
        <section className="flex flex-col gap-2">
          <CartPass
          day="DAY1"
          event={cart.DAY1}
          />
          <CartPass
          day="DAY2"
          event={cart.DAY2}
          />
          <CartPass
          day="DAY3"
          event={cart.DAY3}
          />
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
          {events.map((val,i) => {
            { 
            return (
              val.type !== "ONLINE EVENT" ?
              <AddEventCard
                category={event_ids[i] === "KLIVE" ? "PRO" : (val.type === "WORKSHOP" ? "WK" : "GEN")}
                title={val.name}
                day={val.date === "29/02/2024" ? "DAY1" : (val.date === "01/03/2024" ? "DAY2" : "DAY3")}
                key={event_ids[i]}
                id={event_ids[i]}
              /> : (null)
            ); 
          }
          })}
        </section>
      </section>
    </section>
  );
}
