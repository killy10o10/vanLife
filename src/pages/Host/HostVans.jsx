import vanPicture from '../../assets/van1.png';

const HostVans = () => {
  return (
    <>
      <section className="host-vans-section">
        <h3>Your Listed vans</h3>
        <div className="host-vans-container">
          {/* Host Van */}
          <div className="host-van">
            <div className="host-van-image">
              <img src={vanPicture} alt="vanImage" />
            </div>
            <div className="host-van-desc">
              <h4>Modest Explorer</h4>
              <small>$60/day</small>
            </div>
          </div>
          {/* Host Van */}
          <div className="host-van">
            <div className="host-van-image">
              <img src={vanPicture} alt="vanImage" />
            </div>
            <div className="host-van-desc">
              <h4>Modest Explorer</h4>
              <small>$60/day</small>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HostVans;
