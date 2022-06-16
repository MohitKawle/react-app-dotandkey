import React from 'react'
import { Carousel } from 'react-bootstrap'

export default function Carouseltwo() {
  return (
    <div id="carouselExampleControls" class="carousel slide" data-ride="carousel" style={{borderRadius:"20%"}}>
    <div class="carousel-inner">
      <div class="carousel-item active">
        <img class="d-block w-100" src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/BBB_Up_sale_Sale_Desktop_BannerArtboard_2_1.jpg?v=1655305233" alt="First slide"/>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/BBB_Up_sale_Sale_Desktop_BannerArtboard_1_1.jpg?v=1655305234" alt="Second slide"/>
      </div>
      <div class="carousel-item">
        <img class="d-block w-100" src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/BBB_Up_sale_Sale_Desktop_BannerArtboard_3.jpg?v=1655305234" alt="Third slide"/>
      </div>
    </div>
    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
      <span class="carousel-control-prev-icon" aria-hidden="true"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
      <span class="carousel-control-next-icon" aria-hidden="true"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
  )
}







// <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
//   <ol class="carousel-indicators">
//     <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
//     <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//     <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//   </ol>
//   <div class="carousel-inner">
//     <div class="carousel-item active">
//       <img class="d-block w-100" src="..." alt="First slide"/>
//     </div>
//     <div class="carousel-item">
//       <img class="d-block w-100" src="..." alt="Second slide"/>
//     </div>
//     <div class="carousel-item">
//       <img class="d-block w-100" src="..." alt="Third slide"/>
//     </div>
//   </div>
//   <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//     <span class="sr-only">Previous</span>
//   </a>
//   <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//     <span class="carousel-control-next-icon" aria-hidden="true"></span>
//     <span class="sr-only">Next</span>
//   </a>
// </div>