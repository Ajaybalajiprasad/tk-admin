"use client";

import CartPass from "./CartPass";
import { IconShoppingCart, IconX } from "@tabler/icons-react";
import { API_URL, cn } from "@/libs/utils";
import { useAuth, useCart } from "@/store";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function CartSheet() {
  const { cart, cartOpen, toggleCart } = useCart((state) => state);
  const { auth } = useAuth((state) => state);
  const events_id = ["OD-567"];
  const router = useRouter();

  const confirmEvents = async () => {
    try {
      await axios
        .put(
          `${API_URL}/user/update-cart`,
          { events_id },
          {
            headers: { authorization: `Bearer ${auth?.access_token}` },
          },
        )
        .then((data) => {
          console.log(data);
        });
    } catch (err: any) {}
  };

  return (
    <section
      className={cn(
        `
        bg-opacity-60 absolute top-0 min-h-screen min-w-60 lg:min-w-[500px] z-40 
        border-l- rounded-l-xl
        backdrop-blur pt-36 py-24 px-5 flex flex-col  justify-between transition-all duration-700 ease-in-out overflow-auto`,
        cartOpen ? "right-0" : "-right-[600px]",
      )}
    >
      {cart.codes.DAY1.length === 0 &&
      cart.codes.DAY2.length === 0 &&
      cart.codes.DAY3.length === 0 ? (
        <section className="text-cream flex flex-col items-center justify-center">
          <h1 className="text-xl lg:text-7xl text-cream">Cart Is Empty</h1>
          <IconShoppingCart size={72} />
        </section>
      ) : (
        <>
          <section className="space-y-2 h-0 flex-grow overflow-auto">
            <CartPass day={"DAY1"} event={cart.DAY1} />
            <CartPass day={"DAY2"} event={cart.DAY2} />
            <CartPass day={"DAY3"} event={cart.DAY3} />
          </section>

          <h1 className="text-center text-cream text-md font-oranienbaum">Boarding starts tomorrow ! ! !</h1>

          <button
            className="px-6 py-2 text-black cursor-not-allowed text-2xl mt-8 border w-fit self-center rounded-md bg-cream hover:bg-white"
            onClick={() => confirmEvents()}
            disabled
          >
            Confirm
          </button>
        </>
      )}
      <IconX
        onClick={() => toggleCart()}
        className="absolute left-8 top-8 cursor-pointer text-cream hover:text-white"
      />
    </section>
  );
}
