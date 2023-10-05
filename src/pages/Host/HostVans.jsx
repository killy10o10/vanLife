import { Link, useLoaderData } from 'react-router-dom';
import { getHostVans } from '../../../api';

export const loader = () => {
  return getHostVans()
}

const HostVans = () => {
  const vans = useLoaderData()

  const hostVans = vans.map((van) => {
    return (
        <Link to={van.id} key={van.id} state={van}>
          <div className="host-van">
            <div className="host-van-image">
              <img src={van.imageUrl} alt={van.name} />
            </div>
            <div className="host-van-desc">
              <h4>{van.name}</h4>
              <small>GH₵{van.price}/day</small>
            </div>
          </div>
        </Link>
    );
  });

  return (
    <>
      <section className="host-vans-section section">
        <h3>Your Listed Vans</h3>
        <div className="host-vans-container">
          {/* Host Van */}
           {vans.length === 0 ? <h3 className='center'>Loading...</h3> : hostVans}  
        </div>
      </section>
    </>
  );
};

export default HostVans;
