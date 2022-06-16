import React from 'react'
import Carouselone from '../Component/Carouselone'



import CumstomerReviews from '../Component/CumstomerReviews'
import FiveProducts from '../Component/FiveProducts'
import LovedBy from '../Component/LovedBy'
import SkincareJournal from '../Component/SkincareJournal'

const Homepage = () => {
//   let firstSlider=[
//     { 
//       image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/BBB-Live-Now-Banner-Desktop.gif?v=1655305012"
//     },
//     {
//       image:"https://cdn.shopify.com/s/files/1/0361/8553/8692/files/CICA_SPF_Home_Screen_Desktop_Banner.png?v=1655304812r.js/800x400?text=Second slide&bg=282c34"
//     },
//     {
//       image:'https://cdn.shopify.com/s/files/1/0361/8553/8692/files/serum_esk.png?v=1655304812'
//     },
//     {
//       image:'https://cdn.shopify.com/s/files/1/0361/8553/8692/files/2-Vit-C_5.jpg?v=1651751278'
//     },
  
//   ];
//   let FirstSlider=["https://cdn.shopify.com/s/files/1/0361/8553/8692/files/BBB-Live-Now-Banner-Desktop.gif?v=1655305012",
//   "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/CICA_SPF_Home_Screen_Desktop_Banner.png?v=1655304812r.js/800x400?text=Second slide&bg=282c34",

// ]

// console.log(typeof FirstSlider,"firsttype")


  return (
    <>
      <div>Homepage</div>
      <FiveProducts/>
      <Carouselone/>
    {/* <CaptionCarousel cards={cards}/> */}
    <LovedBy/>
    
      <CumstomerReviews />
      <SkincareJournal/>
     
    </>
  
  )
}

export default Homepage