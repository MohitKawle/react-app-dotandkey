import React from 'react'
import { Carousel } from 'react-bootstrap'

export default function Carouselone(firstSlider) {
  console.log(firstSlider)
  return (
    <>
      <Carousel>
        <Carousel.Item interval={1000}>
          <img
            className="d-block "
            src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/BBB-Live-Now-Banner-Desktop.gif?v=1655305012"
            alt="First slide"
          />
        
        </Carousel.Item>
        <Carousel.Item interval={500}>
          <img
            className="d-block"
            src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/CICA_SPF_Home_Screen_Desktop_Banner.png?v=1655304812r.js/800x400?text=Second slide&bg=282c34"
            alt="Second slide"
          />
       
        </Carousel.Item >
        <Carousel.Item >
          <img
            className="d-block"
            src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/serum_esk.png?v=1655304812"
            alt="Third slide"
          />
       
        </Carousel.Item>
        <Carousel.Item >
          <img
            className="d-block"
            src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/2-Vit-C_5.jpg?v=1651751278"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>

    </>
  )
}

