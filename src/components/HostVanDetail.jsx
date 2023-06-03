import { Link, NavLink, Outlet, useParams } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { useEffect, useState } from 'react';

const HostVanDetail = () => {

  const { id } = useParams();

  const [currentVan, setCurrentVan] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(`/api/host/vans/${id}`);
        const data = await response.json();
        setCurrentVan(data.vans);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  
  return (
    <>
      <section className="host-van-detail-section">
        <Link to=".." relative="path" className="back">
          <BsArrowLeft /> Back to all vans
        </Link>
        <div className="host-van-deatil-card">
          <div className="host-van-detail-head">
            <div className="host-van-detail-image">
              <img src={currentVan.imageUrl} alt={currentVan.name} />
            </div>
            <div className="host-van-detail-title">
              <button type="button" className={`category-button ${currentVan.type}`}>
                {currentVan.type}
              </button>
              <h3>{currentVan.name}</h3>
              <small>
                <strong className="bold">${currentVan.price}</strong>/day
              </small>
            </div>
          </div>
          <nav>
            <NavLink state={currentVan} to="details" className={({ isActive }) => (isActive ? 'activeStyle' : null)}>Details</NavLink>
            <NavLink state={currentVan} to="pricing"  className={({ isActive }) => (isActive ? 'activeStyle' : null)}>Pricing</NavLink>
            <NavLink state={currentVan} to="photos" className={({ isActive }) => (isActive ? 'activeStyle' : null)}>Photos</NavLink>
          </nav>
          <Outlet />
        </div>
      </section>
    </>
  );
};

export default HostVanDetail;
