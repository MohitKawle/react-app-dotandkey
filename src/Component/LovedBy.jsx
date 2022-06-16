import React from 'react'
import { Flex, Text,Box } from '@chakra-ui/react'
import Carouseltwo from './Carouseltwo'

const LovedBy = () => {
    const c2={
        width:'70%',
        marginLeft:'15%',
        justifyContent:'centre',
        display:Flex,
        
    }
  return (
    <div style={{margin:'auto'}}>
        <div style={{textAlign:'center'}}>
        <Text fontSize={'2xl'}>loved by</Text>
        </div>
        <div style={{textAlign:'center'}}>
           <Text fontSize={'4xl'}>Over <i>10 Lakh</i> Customers     </Text>
        </div>
      
        <div style={c2}>
            
        <Carouseltwo/>
        <div></div>
        </div>
       
        
        


    </div>
  )
}

export default LovedBy