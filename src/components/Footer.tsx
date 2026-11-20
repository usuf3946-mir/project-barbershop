export default function Footer() {
  return (
    <footer className="footer" id="contact">
      <div className="footer__about">
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <div className="footer__social">
          <span className="social social--fb">f</span>
          <span className="social social--ig"></span>
          <span className="social social--g">G</span>
        </div>
      </div>

      <div className="footer__col">
        <h4>Home</h4>
        <a href="#booking">Booking</a>
        <a href="#facilities">Facilities</a>
        <a href="#location">Location</a>
        <a href="#contact">Contact</a>
      </div>

      <div className="footer__col">
        <h4>Help</h4>
        <a href="#about-us">About Us</a>
        <a href="#">Help center</a>
        <a href="#">Privacy policy</a>
        <a href="#">FAQs</a>
      </div>

      <div className="footer__col">
        <h4>Get the app</h4>
        <a href="#">iOS app</a>
        <a href="#">Android app</a>
      </div>
    </footer>
  );
}