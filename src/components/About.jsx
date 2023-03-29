import aboutImg from '../assets/about-img.jpg';
import { Link } from 'react-router-dom';

function About() {
  return (
    <section className="about-section">
      <div className="about-img">
        <img src={aboutImg} alt="about-img" />
      </div>
      <div className="about-content">
        <h3>Don’t squeeze in a sedan when you could relax in a van.</h3>
        <p>
          Our mission is to enliven your road trip with the perfect travel van
          rental. Our vans are recertified before each trip to ensure your
          travel plans can go off without a hitch. (Hitch costs extra 😉)
          <br /> <br />
          Our team is full of vanlife enthusiasts who know firsthand the magic
          of touring the world on 4 wheels.
        </p>
        <div className="explore-card">
          <p>Your destination is waiting.</p>
          <p>Your van is ready.</p>
          <br />
            <Link className="button" to="/vans">
            Explore our vans
          </Link>
        </div>
      </div>
    </section>
  );
}

export default About;
