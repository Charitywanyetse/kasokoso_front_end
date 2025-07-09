
import React from 'react'
import './About_us.css'
import about_img from '../../components/gallery/about.jpg'
import play_icon from '../../components/gallery/play_button_flat_with_outline.jpg'

const About_us = () => {
  return (
    <div className='about'>
      <div className='about_left'>
         <img src={ about_img } alt='' className='about-img'/>
         <img src={ play_icon } alt='' className='play-icon'/>
      </div>
      <div className='about_right'>
        <h2> ABOUT KASOKOSO BEACH </h2>
        <br></br>
        <h3> "Where Every Wave Brings Peace." </h3>

        <p> <b className='bold'>K</b>asokoso Beach is a calm and beautiful destination created with 
            the purpose of sharing the natural beauty of our environment with
            the people we serve. Located in a peaceful lakeside setting,
            our beach ismore than just a leisure spot .it’s a space where nature, 
            culture, and community come together. We are proud to open our gates 
            to families, organizations, and visitors 
             looking forward to enjoy both the calm of nature and the excitement of memorable
              experiences.</p>

       <p> <b className='bold'>A</b>t the heart of Kasokoso Beach are four core services designed to meet 
        a variety of needs. Our modern conference hall offers the perfect space for
         meetings, workshops, and business events. For those looking to unwind, our 
         swimming pool provides a refreshing escape in a clean and safe environment.
          Our restaurant serves delicious meals made with fresh ingredients — a true taste 
          of local and international flavors. Additionally, our grounds for hire are ideal 
          for weddings, parties, and community events, offering open space surrounded by
           natural beauty.</p>

        <p> <b className='bold'>W</b>e are committed to providing quality service, comfort, and a welcoming 
            atmosphere to everyone who visits. Whether you're here to relax with friends, 
            host an event, enjoy a family meal, or simply admire the beauty of our 
            surroundings, Kasokoso Beach is here to serve you. With a dedicated team 
            and a strong connection to our community, we strive to make every visit a
             joyful and meaningful experience.</p>

      </div>

    
    </div>
  )
}

export default About_us
