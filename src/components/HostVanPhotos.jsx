import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostVanPhotos() {
  
const currentVan = useOutletContext()

  return (
    <>
      <div className="host-van-detail-photos">
        <img src={currentVan.imageUrl} alt={currentVan.name} />
      </div>
    </>
  )
}

export default HostVanPhotos
