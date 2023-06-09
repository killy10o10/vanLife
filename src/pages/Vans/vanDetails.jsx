import { Link, useLocation } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { motion } from 'framer-motion';

function VanDetails() {
  const location = useLocation();
  const { state } = location;

  return (
    <section className="van-details-section">
      <Link to="/vans" className="back">
        <BsArrowLeft /> Back to all vans
      </Link>
      <motion.div layout className="van-details-grid">
        <div className="van-details-image">
          <img src={state.imageUrl} alt={state.name} />
          <button className={`category-button ${state.type}`}>
            {state.type}
          </button>
        </div>
        <div className="van-details-description">
          <h3>{state.name}</h3>
          <p className="price">
            {state.price}
            <small>/day</small>
          </p>
          <p>{state.description}</p>
          <button className="button">Rent this van</button>
        </div>
      </motion.div>
    </section>
  );
}
export default VanDetails;
