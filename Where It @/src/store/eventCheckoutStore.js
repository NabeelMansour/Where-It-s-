import { create } from "zustand";

const useEventCheckoutStore = create((set) => ({
  selectedEvents: [],

  addToSelected: (event) =>
    set((state) => {
      const exists = state.selectedEvents.find((e) => e.id === event.id);
      if (exists) {
        return {
          selectedEvents: state.selectedEvents.map((e) =>
            e.id === event.id ? { ...e, quantity: e.quantity + 1 } : e
          ),
        };
      }
      return {
        selectedEvents: [...state.selectedEvents, { ...event, quantity: 1 }],
      };
    }),

  increaseQty: (id) =>
    set((state) => ({
      selectedEvents: state.selectedEvents.map((event) =>
        event.id === id ? { ...event, quantity: event.quantity + 1 } : event
      ),
    })),

  decreaseQty: (id) =>
    set((state) => ({
      selectedEvents: state.selectedEvents.map((event) =>
        event.id === id
          ? { ...event, quantity: Math.max(1, event.quantity - 1) }
          : event
      ),
    })),
}));

export default useEventCheckoutStore;
