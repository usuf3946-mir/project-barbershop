export default function Location() {
  return (
    <section className="location" id="location">
      <div className="location__map">
        <span className="location__dot"></span>
      </div>

      <div className="location__card">
        <div>
          <h2>Location of our Hotelos</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
        </div>
        <div className="location__form">
          <input type="email" placeholder="Enter your email" />
          <button className="btn btn--sm">Contact</button>
        </div>
      </div>
    </section>
  );
}