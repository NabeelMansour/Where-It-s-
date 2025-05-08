import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/home.jsx";
import Events from "./pages/Events.jsx";
import Order from "./pages/Order.jsx";
import Ticket from "./pages/Ticket.jsx";
import EventDetail from "./components/eventdetail/EventDetail.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/events",
    element: <Events />,
  },
  {
    path: "/order",
    element: <Order />,
  },
  {
    path: "/event",
    element: <EventDetail />,
  },
  {
    path: "/ticket",
    element: <Ticket />,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
