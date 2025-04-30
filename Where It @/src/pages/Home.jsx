import Navbar from "../components/navbar/Navbar";
import logo from "../assets/logo/logo.png";

function Home() {
  return (
    <section className="home__wrapper">
      <div className="home__inner">
        <img className="logo" src={logo} alt="Logo" />
        <h2 className="home__company__subheading">Where It's @</h2>
        <h3 className="home__ticket__subheading">Ticketing made easy</h3>
      </div>
      <Navbar />
    </section>
  );
}

export default Home;
