import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

const HostVans = () => {
  const [vans, setVans] = useState([]);
  useEffect(() => {
    (async () => {
      try {
        const response = await fetch('/api/host/vans');
        const data = await response.json();
        setVans(data.vans);
      } catch (err) {
        console.log('Error occurred when fetching vans');
      }
    })();
  }, []);

  const hostVans = vans.map((van) => {
    return (
        <Link to={`/host/vans/${van.id}`} key={van.id} state={van}>
          <div className="host-van">
            <div className="host-van-image">
              <img src={van.imageUrl} alt={van.name} />
            </div>
            <div className="host-van-desc">
              <h4>{van.name}</h4>
              <small>${van.price}/day</small>
            </div>
          </div>
        </Link>
    );
  });

  return (
    <>
      <section className="host-vans-section">
        <h3>Your Listed Vans</h3>
        <div layout className="host-vans-container">
          {/* Host Van */}
           {vans.length === 0 ? <h3 className='center'>Loading...</h3> : hostVans}  
        </div>
      </section>
    </>
  );
};

export default HostVans;
