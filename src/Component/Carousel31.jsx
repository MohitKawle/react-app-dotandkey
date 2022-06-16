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
   <img style={{width:'50%'}} src="https://frolicking-arithmetic-6035e6.netlify.app/i2/1.PNG" onDragStart={handleDragStart} role="presentation" alt="1" />,
   <img style={{width:'50%'}} src="https://frolicking-arithmetic-6035e6.netlify.app/i2/2.PNG" onDragStart={handleDragStart} role="presentation" alt="2"/>,
   <img style={{width:'50%'}} src="https://frolicking-arithmetic-6035e6.netlify.app/i2/3.PNG" onDragStart={handleDragStart} role="presentation" alt="3"/>,
   <img style={{width:'50%'}} src="https://frolicking-arithmetic-6035e6.netlify.app/i2/4.PNG" onDragStart={handleDragStart} role="presentation" alt="2"/>,
   <img style={{width:'50%'}} src="https://frolicking-arithmetic-6035e6.netlify.app/i2/5.PNG" onDragStart={handleDragStart} role="presentation" alt="2"/>,
   <img style={{width:'50%'}} src="https://frolicking-arithmetic-6035e6.netlify.app/i2/1.PNG" onDragStart={handleDragStart} role="presentation" alt="2"/>,
];

const Carousel31 = () => {
    
  return (<>
    <AliceCarousel 
    responsive={responsive}
    mouseTracking items={items} />
   
  </>
  
    
  );
}
export default Carousel31



