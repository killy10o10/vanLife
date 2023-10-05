import { Link, NavLink, Outlet, useLoaderData } from 'react-router-dom';
import { BsArrowLeft } from 'react-icons/bs';
import { getHostVans } from '../../api';


export const loader = ({params}) => getHostVans(params.id);

const HostVanDetail = () => {
  const currentVan = useLoaderData()

  return (
    <>
      <section className="host-van-detail-section">
        <Link to=".." relative="path" className="back">
          <BsArrowLeft /> Back to listed vans
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
            <NavLink state={currentVan} to="." end className={({ isActive }) => (isActive ? 'activeStyle' : null)}>Details</NavLink>
            <NavLink state={currentVan} to="pricing"  className={({ isActive }) => (isActive ? 'activeStyle' : null)}>Pricing</NavLink>
            <NavLink state={currentVan} to="photos" className={({ isActive }) => (isActive ? 'activeStyle' : null)}>Photos</NavLink>
          </nav>
          <Outlet context={currentVan} />
        </div>
      </section>
    </>
  );
};

export default HostVanDetail;
