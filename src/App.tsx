import "./App.css";
import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Hotels from "./components/Hotels";
import Facilities from "./components/Facilities";
import History from "./components/History";
import Testimonial from "./components/Testimonial";
import Location from "./components/Location";
import Footer from "./components/Footer";
import Crud from "./components/Crud";
export default function App() {
  return (
    <div className="page">
      <Nav />
      <Hero />
      <Hotels />
      <Facilities />
      <History />
      <Testimonial />
      <Location />
      <Footer />
      <Crud/>
    </div>
  );
}