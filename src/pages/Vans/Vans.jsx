import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function Vans() {
  const [vansData, setVansData] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/api/vans');
        const data = await response.json();
        setVansData(data.vans);
      } catch (err) {
        console.log('Error occured when fetching vans');
      }
    })();
  }, []);

  const vanListEl = vansData.map((van) => (
    <div className="van" key={van.id}>
      <div className="van-image">
        <Link to={`/vans/${van.id}`} state={van}>
          <img src={van.imageUrl} alt={van.name} />
        </Link>
        <div className="van-name">
          <p>{van.name}</p>
          <p>
            GH¢{van.price}
            <small>/day</small>
          </p>
        </div>
      </div>
      <div className="van-description">
        <button className={`category-button ${van.type}`}>{van.type}</button>
      </div>
    </div>
  ));

  return (
    <section className="vans-section">
      <div className="category">
        <h3>Explore our van options</h3>
        <small>Clear filters</small>
        <ul className="category-list">
          <li className="simple">Simple</li>
          <li className="luxury">Luxury</li>
          <li className="rugged">Rugged</li>
        </ul>
      </div>
      <div className="vans">{vansData.length === 0 ? <h3 className='center bold'>Loading...</h3> : vanListEl}</div>
    </section>
  );
}

export default Vans;
