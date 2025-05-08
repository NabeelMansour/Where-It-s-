import { useEffect } from "react";
import useEventsStore from "../../store/eventsStore";
import { Link } from "react-router-dom";

function EventList() {
  const { events, loadEvents, selectEvent } = useEventsStore();

  useEffect(() => {
    loadEvents();
  }, []);

  const eventList = events.map((event) => (
    <Link to={`/event`} key={event.id} onClick={() => selectEvent(event)}>
      <div className="event" key={event.id}>
        <div className="event__date">
          <p>
            <span>{event.when.date.slice(0, 2)}</span>
            <span>{event.when.date.slice(2, 6)}</span>
          </p>
        </div>
        <div className="event__inner">
          <h2>{event.name}</h2>
          <p className="event__place">{event.where}</p>
          <div className="event__time">
            <p>
              {event.when.from} - {event.when.to}
            </p>
            <span className="event__price">{event.price} sek</span>
          </div>
          <div className="divider"></div>
        </div>
      </div>
    </Link>
  ));

  return <>{eventList}</>;
}

export default EventList;
