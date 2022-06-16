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
   <img style={{width:'50%'}} src="https://animated-banoffee-92499a.netlify.app/Images1/img1.PNG" onDragStart={handleDragStart} role="presentation" alt="1" />,
   <img style={{width:'50%'}} src="https://animated-banoffee-92499a.netlify.app/Images1/img2.PNG" onDragStart={handleDragStart} role="presentation" alt="2"/>,
   <img style={{width:'50%'}} src="https://animated-banoffee-92499a.netlify.app/Images1/img3.PNG" onDragStart={handleDragStart} role="presentation" alt="3"/>,
   <img style={{width:'50%'}} src="https://animated-banoffee-92499a.netlify.app/Images1/img4.PNG" onDragStart={handleDragStart} role="presentation" alt="2"/>,
   <img style={{width:'50%'}} src="https://animated-banoffee-92499a.netlify.app/Images1/img5.PNG" onDragStart={handleDragStart} role="presentation" alt="2"/>,
   <img style={{width:'50%'}} src="https://animated-banoffee-92499a.netlify.app/Images1/img6.PNG" onDragStart={handleDragStart} role="presentation" alt="2"/>,
];

const Carousel3 = () => {
    
  return (<>
    <AliceCarousel 
    responsive={responsive}
    mouseTracking items={items} />
   
  </>
  
    
  );
}
export default Carousel3



