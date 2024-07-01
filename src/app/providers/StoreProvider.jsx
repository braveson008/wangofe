import { create } from "zustand";

export const useStore = create((set) => ({
  user: null,
  cities: [],
  areas: [],
  selectedCity: null,
  selectedArea: null,
  setUser: (user) => set({ user }),
  setCities: (cities) => set({ cities }),
  setAreas: (areas) => set({ areas }),
  setSelectedCity: (city) => set({ selectedCity: city }),
  setSelectedArea: (area) => set({ selectedArea: area }),
}));
