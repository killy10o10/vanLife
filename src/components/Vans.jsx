import vanImage from '../assets/van1.png'

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
              <h3>Modest Explorer</h3>
            </div>
          </div>
          <div className="van-description">
          </div>
        </div>
        <div className="van">
          <div className="van-image">
            <img src={vanImage} alt="van-image" />
            <h3>Modest Explorer</h3>
          </div>
          <div className="van-description">
            <div className="van-name">
            </div>
          </div>
        </div>
        <div className="van">
          <div className="van-image">
            <img src={vanImage} alt="van-image" />
            <h3>Modest Explorer</h3>
          </div>
          <div className="van-description">
            <div className="van-name">
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Vans;
