import React from 'react'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import shopingweb from '../../Assets/Product/shopping.png'; 
import boat from '../../Assets/Product/boat.png'; 
import tv from '../../Assets/Product/tv.png';
import  "./sliderSection.css"
const handleDragStart = (e) => e.preventDefault();

const items=[
<div onDragStart={handleDragStart} role="presentation">
        <div className='main-wrapper'>
        <div className='leftSec'>
                <span className='topHead'> HOT   deal </span>
                <h4>Sale 20% of </h4>
                <h3>Xiaomi Redmi Note 11</h3>
                <h5>Top quality Mobile & Accessories</h5>
                <button className='discoverBtn'>Discover now</button>
            </div>
            <div className='rightSec'>
                <img src={shopingweb} alt='' />
            </div>
        </div>

     </div>
    ,
    <div onDragStart={handleDragStart} role="presentation">
    <div className='main-wrapper'>
    <div className='leftSec'>
            <span className='topHead'> HOT   deal </span>
            <h4>Sale 20% of </h4>
            <h3>Mi 108 cm (43 inch)</h3>
            <h5>Full HD LED Smart Google TV</h5>
            <button className='discoverBtn'>Discover now</button>
        </div>
        <div className='rightSec'>
            <img src={tv} alt='' />
        </div>
    </div>

 </div>,
   <div onDragStart={handleDragStart} role="presentation">
   <div className='main-wrapper'>
   <div className='leftSec'>
           <span className='topHead'> HOT   deal </span>
           <h4 className='h4'>Sale 43% off </h4>
           <h3 className='h3'>boAt Airdopes </h3>
           <h5 className='h5'>with 40 Hours Playback, ASAP Charge </h5>
           <button className='discoverBtn'>Discover now</button>
       </div>
       <div className='rightSec'>
           <img src={boat} alt='' />
       </div>
   </div>

</div>
]

export const Slider = () => {
  return (
  <AliceCarousel 
  autoPlay={true}
  autoPlayInterval={5000}
  infinite={true}
  mouseTracking 
  disableButtonsControls
  items={items} />
  )
}
