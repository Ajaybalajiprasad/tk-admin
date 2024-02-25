import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";
import { Cart, CartState, User } from "./libs/types";

const initData: Cart = {
  DAY1: {
    WK: [],
    GEN: [],
    PRO: [],
  },
  DAY2: {
    WK: [],
    GEN: [],
    PRO: [],
  },
  DAY3: {
    WK: [],
    GEN: [],
    PRO: [],
  },
  codes: {
    DAY1: [],
    DAY2: [],
    DAY3: [],
  },
};

export const useCart = create<CartState>()(
  persist(
    (set) => ({
      cart: initData,

      addEvent: (event) => {
        set((state) => {
          const newCart = state.cart;

          if (newCart.codes[event.day].includes(event.id)) return {};

          newCart[event.day][event.category].push(event);
          newCart.codes[event.day].push(event.id);

          return { cart: newCart };
        });
      },

      removePass: (day) => {
        set((state) => {
          const newCart = state.cart;

          newCart[day] = {
            WK: [],
            GEN: [],
            PRO: [],
          };
          newCart.codes[day] = [];

          return { cart: newCart };
        });
      },

      removeEvent: (code, day, category) => {
        set((state) => {
          const newCart = state.cart;

          newCart[day][category] = [
            ...newCart[day][category].filter((obj) => obj.id !== code),
          ];
          newCart.codes[day] = [
            ...newCart.codes[day].filter((i) => i !== code),
          ];

          return { cart: newCart };
        });
      },

      cartOpen: false,
      toggleCart: () => {
        set((state) => ({ cartOpen: !state.cartOpen }));
      },
    }),
    {
      name: "cart",
      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);

interface AuthState {
  auth: User | null;
  setAcessToken: (user: User) => void;
  removeToken: () => void;
  setVerificationStatus: () => void;
}

const initUser = null;

export const useAuth = create<AuthState>()(
  persist(
    (set) => ({
      auth: initUser,
      setAcessToken: (user) => {
        const newUser: User = { ...user, verified: false };
        set(() => ({
          auth: newUser,
        }));
      },
      removeToken: () => {
        set(() => ({ auth: null }));
      },
      setVerificationStatus: () => {
        set((state) => ({
          auth: state.auth
            ? {
              ...state.auth,
              verified: true,
            }
            : null,
        }));
      },
    }),
    {
      name: "user",

      storage: createJSONStorage(() => sessionStorage),
    },
  ),
);
