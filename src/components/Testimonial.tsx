export default function Testimonial() {
  return (
    <section className="testimonial">
      <button className="testimonial__arrow testimonial__arrow--left" aria-label="Previous">‹</button>

      <div className="testimonial__body">
        <p>
          <span className="quote quote--open">“</span>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
          industry's standard dummy Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply dummy
          Lorem Ipsum is simply dummy text of the printing and typesetting industry.
          <span className="quote quote--close">”</span>
        </p>
        <h4>Alexandr Ivchenko</h4>
        <small>Businessman</small>
      </div>

      <img className="testimonial__photo" src="/img/person.jpg" alt="Alexandr Ivchenko" />

      <button className="testimonial__arrow testimonial__arrow--right" aria-label="Next">›</button>
    </section>
  );
}