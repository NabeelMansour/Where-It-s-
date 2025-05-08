import Tickets from "../components/ticket/Tickets";
import Navbar from "../components/navbar/Navbar";

function Ticket() {
  return (
    <section className="ticket__wrapper">
      <Tickets />
      <Navbar />
    </section>
  );
}

export default Ticket;
