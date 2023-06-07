import React from 'react'
import { useOutletContext } from 'react-router-dom'

function HostVanPricing() {

  const currentVan = useOutletContext()
  return (
    <>
      <div className='host-van-detail-pricing'>
        <h1>{currentVan.price}<small>/day</small></h1>
      </div>
    </>
  )
}

export default HostVanPricing