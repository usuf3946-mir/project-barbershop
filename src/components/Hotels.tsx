export default function Hotels() {
  return (
    <section className="hotels">
      <div className="hotels__head">
        <div>
          <h2>Our most popular Hotels</h2>
          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        </div>
        <button className="btn btn--soft btn--sm">View All</button>
      </div>

      <div className="hotels__grid">
        <article className="hotel">
          <img src="/img/hotel-1.jpg" alt="Danubius Hotel Regents Park" />
          <div className="hotel__body">
            <span className="hotel__place">London NW8 7JT England</span>
            <h3>Danubius Hotel Regents Park</h3>
            <div className="hotel__meta">
              <span>$200 Par Night</span>
              <span className="hotel__stars">
                <i className="on">★</i><i className="on">★</i><i className="on">★</i><i className="on">★</i><i className="off">★</i>
              </span>
              <span>4.8</span>
            </div>
          </div>
        </article>

        <article className="hotel">
          <img src="/img/hotel-2.jpg" alt="The Resident Soho" />
          <div className="hotel__body">
            <span className="hotel__place">London NW8 7JT England</span>
            <h3>The Resident Soho</h3>
            <div className="hotel__meta">
              <span>$200 Par Night</span>
              <span className="hotel__stars">
                <i className="on">★</i><i className="on">★</i><i className="on">★</i><i className="on">★</i><i className="off">★</i>
              </span>
              <span>4.8</span>
            </div>
          </div>
        </article>

        <article className="hotel">
          <img src="/img/hotel-3.jpg" alt="London Bridge Hotel" />
          <div className="hotel__body">
            <span className="hotel__place">London NW8 7JT England</span>
            <h3>London Bridge Hotel</h3>
            <div className="hotel__meta">
              <span>$200 Par Night</span>
              <span className="hotel__stars">
                <i className="on">★</i><i className="on">★</i><i className="on">★</i><i className="on">★</i><i className="off">★</i>
              </span>
              <span>4.8</span>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}