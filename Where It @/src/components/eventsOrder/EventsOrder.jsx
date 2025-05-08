import { Link } from "react-router-dom";
import useEventCheckoutStore from "../../store/eventCheckoutStore";
import "./eventsOrder.css";

function EventsOrder() {
  const { selectedEvents, increaseQty, decreaseQty } = useEventCheckoutStore();

  const totalAmount = selectedEvents.reduce(
    (sum, event) => sum + event.price * event.quantity,
    0
  );

  return (
    <section className="order">
      <h2>Order</h2>
      {selectedEvents.length === 0 ? (
        <p>Inga event tillagda ännu.</p>
      ) : (
        <ul>
          {selectedEvents.map((event, index) => (
            <li key={index}>
              <article className="order__event">
                <h2>{event.name}</h2>
                <div className="order__inner-time">
                  <p>
                    <span>{event.when.date.slice(0, 2)}</span>
                    <span>{event.when.date.slice(2, 6)} </span>
                    <span>
                      {event.when.from} - {event.when.to}
                    </span>
                  </p>
                </div>
                <div className="order__total-sum">
                  <span
                    onClick={() => decreaseQty(event.id)}
                    className="order__total-sub"
                  >
                    <i className="fa-solid fa-minus"></i>
                  </span>
                  <span className="order__total-count">{event.quantity}</span>
                  <span
                    onClick={() => increaseQty(event.id)}
                    className="order__total-add"
                  >
                    <i className="fa-solid fa-plus"></i>
                  </span>
                </div>
              </article>
            </li>
          ))}
        </ul>
      )}
      <p className="order__sum-text">Totalt värde på order</p>
      <p className="order__sum">Total: {totalAmount} sek</p>
      <Link to="/ticket">
        <button className="btn order-btn">Skicka order</button>
      </Link>
    </section>
  );
}

export default EventsOrder;
