import { create } from "zustand";
import { persist } from "zustand/middleware";

const useAuthStore = create(
  persist(
    (set) => ({
      isLoggedIn: false,
      token: null,
      user: null,
      login: (payload) =>
        set({
          isLoggedIn: true,
          token: payload.token,
          user: payload.user,
        }),
      logout: () => {
        set({
          isLoggedIn: false,
          token: null,
          user: null,
        });
      },
      clearPersistedData: () => {
        localStorage.removeItem("auth-storage");
      },
    }),
    {
      name: "auth-storage",
      getStorage: () => localStorage,
    }
  )
);

export default useAuthStore;
