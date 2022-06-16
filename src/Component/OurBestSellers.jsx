import React from 'react'
import { Flex, Text } from '@chakra-ui/react'
import Carousel3 from './Carousel3'

const OurBestSellers = () => {
  const c2={
    width:'100%',
    marginLeft:'15%',
    justifyContent:'centre',
    display:Flex,
    
}
    
  return (
    <div style={{margin:'auto'}}>
        <div style={{textAlign:'center'}}>
        <Text fontSize={'2xl'}>Our</Text></div>
        <div style={{textAlign:'center'}}>
           <Text fontSize={'4xl'}> <i>Best Seller</i>     </Text>
        </div>
        <div style={{textAlign:'center'}}>
       
        {/* add different blocks and links */}
        <Text>Skin  | Nutrition | HairCare |  BodyCare </Text>
     
     
       
       </div>
        <div style={c2}>
            
      
       
        </div>
        <Carousel3/>
        
        


    </div>
  
  )
}

export default OurBestSellers