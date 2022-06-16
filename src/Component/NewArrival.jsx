import React from 'react'
import Carousel31 from './Carousel31'
import { Center, Text,Flex } from '@chakra-ui/react'
const NewArrival = () => {

  const c2={
    width:'70%',
    marginLeft:'15%',
    justifyContent:'centre',
    display:Flex,
    
}
return (
<div style={{margin:'auto'}}>
    <div style={{textAlign:'center'}}>
    <Text fontSize={'2xl'}> Shop Our</Text>
    </div>
    <div style={{textAlign:'center'}}>
    <Text fontSize={'4xl'}> <i>New Arrival</i>    </Text>
    </div>
  
    <div style={c2}>
        
    <Carousel31/>
    <div></div>
    </div>
   
    
    


</div>)
}

export default NewArrival



// <div style={{margin:'auto'}}>
// <Text fontSize={'2xl'}></Text>
// <Text fontSize={'4xl'}> <b><i>New Arrival</i></b></Text>
// </div>
// <Carousel31/>