import React from 'react'
import { Route,Routes } from 'react-router-dom'
//import Cart from '../Pages/Cart'
import Homepage from '../Pages/Homepage'


const AllRoutes = () => {
  return (<>
  <Routes>
      <Route path='/' element={<Homepage/>} />
     
  </Routes>
  </>
   
  )
}

export default AllRoutes