import { create } from "zustand";
import EventApi from "../api/eventApi";

const useEventsStore = create((set) => ({
  events: [],
  selectedEvent: null,

  loadEvents: async () => {
    const data = await EventApi();
    set({ events: data.events });
  },

  selectEvent: (data) => {
    set({ selectedEvent: data });
  },
}));

export default useEventsStore;
