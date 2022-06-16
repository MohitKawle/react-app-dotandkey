import "react-alice-carousel/lib/alice-carousel.css";





import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';


const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const handleDragStart = (e) => e.preventDefault();

const items = [
   <img style={{width:'80%'}} src="https://frolicking-arithmetic-6035e6.netlify.app/i2/i1.PNG" onDragStart={handleDragStart} role="presentation" alt="1" />,
   <img style={{width:'80%'}} src="https://frolicking-arithmetic-6035e6.netlify.app/i2/i2.PNG" onDragStart={handleDragStart} role="presentation" alt="2"/>,
   <img style={{width:'80%'}} src="https://frolicking-arithmetic-6035e6.netlify.app/i2/i3.PNG" onDragStart={handleDragStart} role="presentation" alt="3"/>,
   <img style={{width:'80%'}} src="https://frolicking-arithmetic-6035e6.netlify.app/i2/i4.PNG" onDragStart={handleDragStart} role="presentation" alt="2"/>,
   <img style={{width:'80%'}} src="https://frolicking-arithmetic-6035e6.netlify.app/i2/i5.PNG" onDragStart={handleDragStart} role="presentation" alt="2"/>,
   <img style={{width:'80%'}} src="https://frolicking-arithmetic-6035e6.netlify.app/i2/i6.PNG" onDragStart={handleDragStart} role="presentation" alt="2"/>,
];

const Carousel32 = () => {
    
  return (<>
    <AliceCarousel 
    responsive={responsive}
    mouseTracking items={items} />
   
  </>
  
    
  );
}
export default Carousel32



