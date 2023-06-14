import { Link, useLocation } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { motion } from 'framer-motion';

function VanDetails() {
  const location = useLocation();
  const { state } = location;

  const searchFilter = state.search ||  "";

  return (
    <section className="van-details-section">
      <Link to={`..${searchFilter}`} relative="path" className="back">
        <BsArrowLeft /> Back to all vans
      </Link>
      <motion.div layout className="van-details-grid">
        <div className="van-details-image">
          <img src={state.van.imageUrl} alt={state.van.name} />
          <button className={`category-button ${state.van.type}`}>
            {state.van.type}
          </button>
        </div>
        <div className="van-details-description">
          <h3>{state.van.name}</h3>
          <p className="price">
            {state.van.price}
            <small>/day</small>
          </p>
          <p>{state.van.description}</p>
          <button className="button">Rent this van</button>
        </div>
      </motion.div>
    </section>
  );
}
export default VanDetails;
