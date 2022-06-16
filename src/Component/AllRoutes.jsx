import React from 'react'
import { Route,Routes } from 'react-router-dom'
import Bodycare from '../Pages/Bodycare'
import Haircare from '../Pages/Haircare'
//import Cart from '../Pages/Cart'
import Homepage from '../Pages/Homepage'
import Login from '../Pages/Login'
import Moisturizer from '../Pages/Moisturizer'
import Nutrition from '../Pages/Nutrition'
import Serum from '../Pages/Serum'
import Carousel3  from './Carousel3'




const AllRoutes = () => {
  return (<>
  <Routes>
      <Route path='/' element={<Homepage/>} />
      <Route path='/bodycare' element={<Bodycare/>}/>
      <Route path='/haircare' element={<Haircare/>}/>
      <Route path='/moisturizer' element={<Moisturizer/>}/>
      <Route path='/nutrition' element={<Nutrition/>}/>
      <Route path='/serum' element={<Serum/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path="/c" element={<Carousel3/>}/>
     
  </Routes>
  </>
   
  )
}

export default AllRoutes