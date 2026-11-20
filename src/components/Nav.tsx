export default function Nav() {
  return (
    <header className="nav">
      <nav className="nav__links">
        <a href="#booking">Booking</a>
        <a href="#facilities">Facilities</a>
        <a href="#about-us">About Us</a>
        <a href="#location">Location</a>
        <a href="#contact">Contact</a>
      </nav>
      <button className="btn btn--sm nav__login">Login</button>
    </header>
  );
}