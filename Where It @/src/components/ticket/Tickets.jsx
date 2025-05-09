import useEventCheckoutStore from "../../store/eventCheckoutStore";
import "./tickets.css";
import barcode from "../../assets/images/barcode.png";
import { v4 as uuidv4 } from "uuid";

function Tickets() {
  const { selectedEvents } = useEventCheckoutStore();

  const tickets = [];
  const sections = ["A", "B", "C", "D"];
  const barcodeId = uuidv4().slice(0, 5);

  selectedEvents.forEach((cartItem) => {
    let section = sections[Math.floor(Math.random() * sections.length)];
    let seat = Math.floor(Math.random() * 500);

    for (let i = 0; i < cartItem.quantity; i++) {
      const ticket = {
        name: cartItem.name,
        where: cartItem.where,
        when: cartItem.when,
        date: cartItem.when.date,
        from: cartItem.when.from,
        to: cartItem.when.to,
        section: section,
        seat: seat + i,
        id: cartItem.id,
      };
      tickets.push(ticket);
    }
  });

  const ticket = tickets.map((element) => {
    return (
      <article className="ticket__container" key={element.id}>
        <div className="ticket__first__inner-content">
          <p>what</p>
          <h3 className="ticket__heading">{element.name}</h3>
        </div>
        <div>
          <p>where</p>
          <h4 className="border-dotted">{element.where}</h4>
        </div>
        <div className="ticket__first__inner-content-third">
          <span>
            <p>when</p>
            <h5>{element.when.date}</h5>
          </span>
          <span>
            <p>from</p>
            <h5>{element.when.from}</h5>
          </span>
          <span>
            <p>to</p>
            <h5>{element.when.to}</h5>
          </span>
        </div>
        <div className="ticket__seat-section">
          <p>info</p>
          <h6>
            Section {element.section} - seat {element.seat}, bring umbrella
          </h6>
        </div>
        <div className="ticket__barcode">
          <img src={barcode} alt={barcode} />
          <span>{barcodeId}</span>
        </div>
      </article>
    );
  });

  return <section className="ticket">{ticket}</section>;
}

export default Tickets;
