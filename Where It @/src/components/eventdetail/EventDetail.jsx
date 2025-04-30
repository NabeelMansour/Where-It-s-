import useEventsStore from "../../store/useEventsStore";
import Navbar from "../navbar/Navbar";
import "./eventdetail.css";

function EventDetail() {
  const { selectedEvent } = useEventsStore();

  if (!selectedEvent) return <p>No event selected.</p>;

  return (
    <section className="home__wrapper event">
      <h1>Event</h1>
      <p className="event__headline">You are about to score some tickets to</p>

      <div className="event">
        <div className="event__inner-content">
          <h2>{selectedEvent.name}</h2>
          <div className="event__inner-time">
            <p>
              <span>{selectedEvent.when.date.slice(0, 2)}</span>
              <span>{selectedEvent.when.date.slice(2, 6)} </span>
              <span>
                {selectedEvent.when.from} - {selectedEvent.when.to}
              </span>
            </p>
          </div>
          <p className="event__place">{selectedEvent.where}</p>
        </div>
      </div>

      <Navbar />
    </section>
  );
}

export default EventDetail;
