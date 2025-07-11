
import React from 'react'
import './gallery.css'
import gallery_1 from '../../components/gallery/about.jpg'
import gallery_2 from '../../components/gallery/beautiful-couple-showing-affection-beach-near-ocean.jpg'
import gallery_3 from '../../components/gallery/ee.jpg'
import gallery_4 from '../../components/gallery/image_1.jpg'
import gallery_5 from '../../components/gallery/image_2.jpg'
import gallery_6 from '../../components/gallery/image_3.jpg'
import gallery_7 from '../../components/gallery/image_4.jpg'
import gallery_8 from '../../components/gallery/restaurant-hall-with-red-brick-walls-wooden-tables-pipes-ceiling.jpg'
import gallery_9 from '../../components/gallery/sss.jpg'
import gallery_10 from '../../components/gallery/swe.webp'



const Gallery = () => {
  return (
    <div className='title'>

      <h1>GALLERY </h1><br></br>
      <p1> Beach photos </p1>
       
        <div className='Gallery'>

          <div className='image'>
             <img src = {gallery_1} alt=''/>
          </div>

           <div className='image'>
             <img src = {gallery_2} alt=''/>
          </div>

           <div className='image'>
             <img src = {gallery_3} alt=''/>
          </div>

           <div className='image'>
             <img src = {gallery_4} alt=''/>
          </div>

           <div className='image'>
             <img src = {gallery_5} alt=''/>
          </div>

           <div className='image'>
             <img src = {gallery_6} alt=''/>
          </div>

           <div className='image'>
             <img src = {gallery_7} alt=''/>
          </div>

           <div className='image'>
             <img src = {gallery_8} alt=''/>
          </div>

           <div className='image'>
             <img src = {gallery_9} alt=''/>
          </div>

           <div className='image'>
             <img src = {gallery_10} alt=''/>
          </div>

         
        </div>

    </div>

  )
}

export default Gallery
