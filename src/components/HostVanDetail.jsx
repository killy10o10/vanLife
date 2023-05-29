import { Link, NavLink, Outlet, useLocation, useParams } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { useEffect, useState } from 'react';

const HostVanDetail = () => {
  const location = useLocation();
  const { state } = location;

  const { id } = useParams();

  console.log(id)

  const [currentVan, setCurrentVan] = useState(null);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`/api/host/vans/${id}`);
        const data = await response.json();
        console.log(data)
        setCurrentVan(data.vans);
      } catch (err) {
        console.log('Error occurred when fetching vans');
      }
    })();
  }, []);

  // console.log(currentVan)

  return (
    <>
      <section className="host-van-detail-section">
        <Link to=".." relative="path" className="back">
          <BsArrowLeft /> Back to all vans
        </Link>
        <div className="host-van-deatil-card">
          <div className="host-van-detail-head">
            <div className="host-van-detail-image">
              <img src={state.imageUrl} alt={state.name} />
            </div>
            <div className="host-van-detail-title">
              <button type="button" className={`category-button ${state.type}`}>
                {state.type}
              </button>
              <h3>{state.name}</h3>
              <small>
                <strong className="bold">${state.price}</strong>/day
              </small>
            </div>
          </div>
          <nav>
            <NavLink to="details">Details</NavLink>
            {/* <NavLink>Pricing</NavLink>
            <NavLink>Photos</NavLink> */}
          </nav>
          <div className="host-van-detail">
            <p>
              <strong className="bold">Name:</strong> {state.name}
            </p>
            <p>
              <strong className="bold">Category:</strong> {state.type}
            </p>
            <p>
              <strong className="bold">Description:</strong> {state.description}
            </p>
            <p>
              <strong className="bold">Visibility:</strong> Public
            </p>
          </div>
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default HostVanDetail;
