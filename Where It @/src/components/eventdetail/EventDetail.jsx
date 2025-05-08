import { useState } from "react";
import useEventsStore from "../../store/eventsStore";
import useEventCheckoutStore from "../../store/eventCheckoutStore";
import Navbar from "../navbar/Navbar";
import "./eventdetail.css";
import { Link } from "react-router-dom";

function EventDetail() {
  const [count, setCount] = useState(0);
  const { selectedEvent } = useEventsStore();
  const { addToSelected } = useEventCheckoutStore();

  if (!selectedEvent) return <p>No event selected.</p>;

  return (
    <section className="event__wrapper">
      <h1>Event</h1>
      <p className="event__headline">You are about to score some tickets to</p>

      <section className="event__inner">
        <article className="event__inner-content">
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
        </article>
      </section>

      <article>
        <p className="event__total-price">{selectedEvent.price * count} sek</p>
        <div className="event__total-sum">
          <span
            onClick={() => setCount(Math.max(0, count - 1))}
            className="event__total-sub"
          >
            <i className="fa-solid fa-minus"></i>
          </span>
          <span className="event__total-count">{count}</span>
          <span
            onClick={() => setCount(count + 1)}
            className="event__total-add"
          >
            <i className="fa-solid fa-plus"></i>
          </span>
        </div>
      </article>

      <Link to="/order" className="link">
        <button className="btn" onClick={() => addToSelected(selectedEvent)}>
          Lägg i varukorgen
        </button>
      </Link>

      <Navbar />
    </section>
  );
}

export default EventDetail;
