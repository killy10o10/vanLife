import { Link, useLoaderData, useSearchParams } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { getVans } from '../../../api';

export function loader() {
  return getVans();
}

function Vans() {
  const vansData = useLoaderData();

  const [searchParams, setSeachParams] = useSearchParams();
  const typeFilter = searchParams.get('type');

  const handleFilter = (e) => {
    const params = { type: e.target.innerText.toLowerCase() };
    setSeachParams(params);
  };

  const handleClearFilter = () => {
    setSeachParams('');
  };

  const displayedVans = typeFilter
    ? vansData.filter((van) => van.type.toLowerCase() === typeFilter)
    : vansData;

  const vanListEl = displayedVans.map((van) => (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      layout
      className="van"
      key={van.id}
    >
      <div className="van-image">
        <Link
          to={van.id}
          state={{
            van: van,
            search: `?${searchParams.toString()}`,
            type: typeFilter,
          }}
        >
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
        {searchParams.size ? (
          <small onClick={handleClearFilter}>Clear filters</small>
        ) : (
          ''
        )}
        <ul className="category-list">
          <li
            onClick={handleFilter}
            className={`simple ${typeFilter === 'simple' && 'selected'}`}
          >
            Simple
          </li>
          <li
            onClick={handleFilter}
            className={`luxury ${typeFilter === 'luxury' && 'selected'}`}
          >
            Luxury
          </li>
          <li
            onClick={handleFilter}
            className={`rugged ${typeFilter === 'rugged' && 'selected'}`}
          >
            Rugged
          </li>
        </ul>
      </div>
      <motion.div layout className="vans">
        <AnimatePresence>
          {vansData.length === 0 ? (
            <h3 className="center bold">Loading...</h3>
          ) : (
            vanListEl
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}

export default Vans;
