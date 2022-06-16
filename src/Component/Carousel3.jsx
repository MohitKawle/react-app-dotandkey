import "react-alice-carousel/lib/alice-carousel.css";
import  "./Images1"



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
   <img style={{width:'50%'}} src="./Images1/1" onDragStart={handleDragStart} role="presentation" alt="1" />,
   <img style={{width:'50%'}} src="./Images1/2" onDragStart={handleDragStart} role="presentation" alt="2"/>,
   <img style={{width:'50%'}} src="./Images1/3" onDragStart={handleDragStart} role="presentation" alt="3"/>,
   <img style={{width:'50%'}} src="./Images1/4" onDragStart={handleDragStart} role="presentation" alt="2"/>,
   <img style={{width:'50%'}} src="https://cdn.shopify.com/s/files/1/0361/8553/8692/products/1-GreenClayListing_1.jpg?v=1649655908" onDragStart={handleDragStart} role="presentation" alt="2"/>,
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



