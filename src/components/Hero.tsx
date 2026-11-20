export default function Hero() {
  return (
    <section className="hero" id="booking">
      <div className="hero__text">
        <h1>
          Find your perfect
          <br />
          place to stay
        </h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
        <div className="hero__video">
          <span className="hero__play">▶</span>
          <b>Watch video</b>
        </div>
      </div>

      <div className="hero__image">
        <img src="/img/hero.jpg" alt="House" />
      </div>

      <div className="search">
        <div className="search__item">
          <svg className="icon search__icon" viewBox="0 0 24 24">
            <path d="M12 21s7-6.2 7-11.5A7 7 0 0 0 5 9.5C5 14.8 12 21 12 21z" />
            <circle cx="12" cy="9.5" r="2.5" />
          </svg>
          <div>
            <span>Location</span>
            <small>United States</small>
          </div>
        </div>

        <div className="search__item">
          <svg className="icon search__icon" viewBox="0 0 24 24">
            <rect x="3" y="5" width="18" height="16" rx="2" />
            <path d="M3 10h18M8 3v4M16 3v4" />
          </svg>
          <div>
            <span>Chack in</span>
            <small>10 Jun 2021</small>
          </div>
        </div>

        <div className="search__item">
          <svg className="icon search__icon" viewBox="0 0 24 24">
            <rect x="3" y="5" width="18" height="16" rx="2" />
            <path d="M3 10h18M8 3v4M16 3v4" />
          </svg>
          <div>
            <span>Chack out</span>
            <small>15 Jun 2021</small>
          </div>
        </div>

        <div className="search__item">
          <svg className="icon search__icon" viewBox="0 0 24 24">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" />
          </svg>
          <div>
            <span>Rooms for</span>
            <small>1 room, 2 guests</small>
          </div>
        </div>

        <button className="search__btn">
          <svg className="icon search__btn-icon" viewBox="0 0 24 24">
            <circle cx="11" cy="11" r="7" />
            <path d="M21 21l-4.3-4.3" />
          </svg>
          Search...
        </button>
      </div>
    </section>
  );
}