
import React from 'react'
import './Services.css'

import image_1 from '../gallery/image_1.jpg'
import image_2 from '../gallery/image_2.jpg'
import image_3 from '../gallery/image_3.jpg'
import image_4 from '../gallery/image_4.jpg'

const Services = () => {
  return (
    <div className='services'>

      <div className='service_cards'>
        <div className='service_card'>
          <img src={image_1} alt='Conference Hall' />
          <p>Conference Hall</p>
        </div>

        <div className='service_card'>
          <img src={image_2} alt='Grounds for Hire' />
          <p>Grounds for Hire</p>
        </div>

        <div className='service_card'>
          <img src={image_3} alt='Restaurant Food' />
          <p>Restaurant Food</p>
        </div>

        <div className='service_card'>
          <img src={image_4} alt='Swimming Pool' />
          <p>Swimming Pool</p>
        </div>
      </div>
    </div>
  )
}

export default Services
