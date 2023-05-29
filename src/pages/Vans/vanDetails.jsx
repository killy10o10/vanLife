import { Link, useLocation } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';

function VanDetails() {
  const location = useLocation();
  const { state } = location;

  return (
    <section className="van-details-section">
      <Link to="/vans" className="back">
        <BsArrowLeft /> Back to all vans
      </Link>
      <div className="van-details-image">
        <img src={state.imageUrl} alt={state.name} />
      </div>
      <div className="van-details-description">
        <button className={`category-button ${state.type}`}>
          {state.type}
        </button>
        <h3>{state.name}</h3>
        <p className="price">
          {state.price}
          <small>/day</small>
        </p>
        <p>{state.description}</p>
        <button className="button">Rent this van</button>
      </div>
    </section>
  );
}
export default VanDetails;
