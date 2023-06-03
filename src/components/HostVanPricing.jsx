import React from 'react'
import { useLocation } from 'react-router-dom'

function HostVanPricing() {

  const location = useLocation();
  const { state } = location;
  return (
    <>
      <div className='host-van-detail-pricing'>
        <h1>{state.price}<small>/day</small></h1>
      </div>
    </>
  )
}

export default HostVanPricing
