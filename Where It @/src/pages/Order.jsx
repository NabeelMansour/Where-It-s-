import Navbar from "../components/navbar/Navbar";
import EventsOrder from "../components/eventsOrder/EventsOrder";

function Order() {
  return (
    <div className="home__wrapper">
      <EventsOrder />
      <Navbar />
    </div>
  );
}

export default Order;
