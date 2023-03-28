import { Link } from 'react-router-dom';
function Home() {
  return (
    <section className="section">
      <div className="home-content">
        <h3>You got the travel plans, we got the travel vans</h3>
        <p>
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip.
        </p>
        <Link className="button" to="/vans">Find your van</Link>
      </div>
    </section>
  );
}

export default Home;
