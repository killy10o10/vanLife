import vanImage from '../assets/van1.png';
import { useState, useEffect } from 'react';
import '../../server';

function Vans() {
  const [vansData, setVansData] = useState({});
  let vanList;
  useEffect(() => {
    (async () => {
      try{
        const response = await fetch('/api/vans');
        const data = await response.json();
        setVansData(data);
        vanList = vansData.vans.map((van) => 
            <>
              <div className="van" key={van.id}>
                <div className="van-image">
                  <img src={van.imageUrl} alt="van-image" />
                  <div className="van-name">
                    <p>{van.name}</p>
                    <p>
                      {van.price}
                      <small>/day</small>
                    </p>
                  </div>
                </div>
                <div className="van-description">
                  <button className="category-button">{van.type}</button>
                </div>
              </div>
            </>
          );
      }
      catch(err){
        console.log('Error occured when fetching vans')
      }
    })()
  }, []);
  console.log(vansData.vans);
  // const vanList = vansData.vans.map((van) => 
  //   <>
  //     <div className="van" key={van.id}>
  //       <div className="van-image">
  //         <img src={van.imageUrl} alt="van-image" />
  //         <div className="van-name">
  //           <p>{van.name}</p>
  //           <p>
  //             {van.price}
  //             <small>/day</small>
  //           </p>
  //         </div>
  //       </div>
  //       <div className="van-description">
  //         <button className="category-button">{van.type}</button>
  //       </div>
  //     </div>
  //   </>
  // );

  return (
    <section className="vans-section">
      <div className="category">
        <h3>Explore our van options</h3>
        <small>Clear filters</small>
        <ul className="category-list">
          <li className="simple">Simple</li>
          <li className="luxury">Luxury</li>
          <li className="rugged">Rugged</li>
        </ul>
      </div>
      <div className="vans">
        {vanList || `Loading...`}
      </div>
    </section>
  );
}

export default Vans;
