import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';

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

  const [searchParams, setSeachParams] = useSearchParams();
  const typeFilter = searchParams.get('type');

  const handleFilter = (e) => {
    const params = { type: e.target.innerText.toLowerCase() };
    setSeachParams(params);
  };

  const handleClearFilter = () => {
    setSeachParams("");
  };

  const displayedVans = typeFilter
    ? vansData.filter((van) => van.type.toLowerCase() === typeFilter)
    : vansData;

  const vanListEl = displayedVans.map((van) => (
    <motion.div layout className="van" key={van.id}>
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
    </motion.div>
  ));

  return (
    <section className="vans-section">
      <div className="category">
        <h3>Explore our van options</h3>
        <small onClick={handleClearFilter}>Clear filters</small>
        <ul className="category-list">
          <li onClick={handleFilter} className="simple">
            Simple
          </li>
          <li onClick={handleFilter} className="luxury">
            Luxury
          </li>
          <li onClick={handleFilter} className="rugged">
            Rugged
          </li>
        </ul>
      </div>
      <motion.div layout className="vans">
        {vansData.length === 0 ? (
          <h3 className="center bold">Loading...</h3>
        ) : (
          vanListEl
        )}
      </motion.div>
    </section>
  );
}

export default Vans;
