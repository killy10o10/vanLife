import React from 'react'
import { useLocation } from 'react-router-dom'

function HostVanPhotos() {
  const location = useLocation();
  const { state } = location;


  return (
    <>
      <div className="host-van-detail-photos">
        <img src={state.imageUrl} alt={state.name} />
      </div>
    </>
  )
}

export default HostVanPhotos
