import vanImage from '../assets/van1.png';

function Vans() {
  return (
    <section className="vans-section">
      <div className="category">
        <h3>Explore our van options</h3>
        <small>Clear fileters</small>
        <ul className="category-list">
          <li className="simple">Simple</li>
          <li className="luxury">Luxury</li>
          <li className="rugged">Rugged</li>
        </ul>
      </div>
      <div className="vans">
        <div className="van">
          <div className="van-image">
            <img src={vanImage} alt="van-image" />
            <div className="van-name">
              <p>Modest Explorer</p>
              <p>
                $60 <small>/day</small>
              </p>
            </div>
          </div>
          <div className="van-description">
            <button className="category-button">Simple</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vans;
