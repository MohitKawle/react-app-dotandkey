import { Center } from '@chakra-ui/react'
import React from 'react'

const AboveNavbar = () => {

const divStyle={
  width:"100%",
  height:"20px",
 textAlign:Center,
 marginLeft:"auto",
  color:"red",
  backgroundColor:"black",
}

  return (
    <div style={divStyle}> 
    <p>3% off on Prepaid Orders</p>
    </div>
  )
}

export default AboveNavbar