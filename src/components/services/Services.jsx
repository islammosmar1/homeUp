import React from "react"
import img from "../images/services.jpg"
import Back from "../common/Back"

import FeaturedCard from "../home/fearured/FeaturedCard"

const Services = () => {
  return (
    <>
      <section className='services mb'>
        <Back name='Services' title='Services -All Services' cover={img} />
        <div className='featured container'>
          <FeaturedCard />
        </div>
      </section>
    </>
  )
}

export default Services
