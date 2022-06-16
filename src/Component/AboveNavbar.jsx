import { Center } from '@chakra-ui/react'
import React from 'react'

const AboveNavbar = () => {

const divStyle={
  width:"100%",
  height:"20px",
 textAlign:Center,
padding:"auto",
  color:"red",
  backgroundColor:"darkgrey",
  display:"flex",
}
const divStyle1={
  margin:"auto",
}

  return (<>
 <div style={divStyle}>
 <div style={divStyle1}> 
    <p>3% off on Prepaid Orders</p>
    </div>
 </div>
  
   
  </>
 
  )
}

export default AboveNavbar