export default function Facilities() {
  return (
    <section className="facilities" id="facilities">
      <div className="facilities__text">
        <h2>We do our best facilities provide you</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum has been the industry's standard dummy
        </p>
        <button className="btn">Contact Now</button>
      </div>

      <div className="facilities__grid">
        <div className="facility">
          <svg className="icon" viewBox="0 0 24 24">
            <rect x="3" y="4" width="18" height="12" rx="1.5" />
            <path d="M8 20h8M12 16v4" />
          </svg>
          <span>Private Workspace</span>
        </div>

        <div className="facility">
          <svg className="icon" viewBox="0 0 24 24">
            <circle cx="12" cy="12" r="9" />
            <path d="M10 17V7h3a3 3 0 0 1 0 6h-3" />
          </svg>
          <span>Parking Area</span>
        </div>

        <div className="facility">
          <svg className="icon" viewBox="0 0 24 24">
            <path d="M4 10h13v4a5 5 0 0 1-5 5H9a5 5 0 0 1-5-5z" />
            <path d="M17 11h1.5a2.5 2.5 0 0 1 0 5H17M8 3c0 1.5 1.5 1.5 1.5 3M12 3c0 1.5 1.5 1.5 1.5 3" />
          </svg>
          <span>Breakfast</span>
        </div>

        <div className="facility">
          <svg className="icon" viewBox="0 0 24 24">
            <path d="M2 9a15 15 0 0 1 20 0M5 12.5a10 10 0 0 1 14 0M8.5 16a5 5 0 0 1 7 0" />
            <circle cx="12" cy="19.5" r="0.8" />
          </svg>
          <span>Free Wifi</span>
        </div>

        <div className="facility">
          <svg className="icon" viewBox="0 0 24 24">
            <path d="M13 2L5 14h6l-1 8 8-12h-6z" />
          </svg>
          <span>Free Electricity</span>
        </div>

        <div className="facility">
          <svg className="icon" viewBox="0 0 24 24">
            <circle cx="16" cy="6" r="2" />
            <path d="M4 13l5-3 4 2 3-2M2 17c2 0 2 1.5 4 1.5S8 17 10 17s2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5" />
          </svg>
          <span>Swimming Pool</span>
        </div>

        <div className="facility">
          <svg className="icon" viewBox="0 0 24 24">
            <path d="M6 7v10M3 9v6M18 7v10M21 9v6M6 12h12" />
          </svg>
          <span>exercise Space</span>
        </div>

        <div className="facility">
          <svg className="icon" viewBox="0 0 24 24">
            <circle cx="5" cy="12" r="1.5" />
            <circle cx="12" cy="12" r="1.5" />
            <circle cx="19" cy="12" r="1.5" />
          </svg>
          <span>Other Service</span>
        </div>
      </div>
    </section>
  );
}