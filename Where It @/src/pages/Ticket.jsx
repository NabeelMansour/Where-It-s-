import Tickets from "../components/ticket/Tickets";
import Navbar from "../components/navbar/Navbar";
import Confetti from "react-confetti";

function Ticket() {
  return (
    <section className="ticket__wrapper">
      <Tickets />
      <Confetti className="confetti" numberOfPieces={500} recycle={false} />
      <Navbar />
    </section>
  );
}

export default Ticket;
