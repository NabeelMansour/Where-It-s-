import Navbar from "../components/navbar/Navbar";
import "../index.css";
import EventList from "../components/eventlist/EventList";

function Events() {
  return (
    <section className="home__wrapper">
      <h1>Events</h1>
      <article className="eventList">
        <EventList />
      </article>
      <Navbar />
    </section>
  );
}

export default Events;
