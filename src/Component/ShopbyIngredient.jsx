import { Box } from '@chakra-ui/react'
import React from 'react'
import Carousel32 from './Carousel32'

const ShopbyIngredient = () => {
  return (<>
   <div style={{textAlign:'center'}}>
    <Box fontSize={'2xl'}>Shop by</Box>
    <Box fontSize={'4xl'}>  <i>Ingredient</i> </Box>
   </div>
   <Carousel32/>
  
  </>
   
  )
}

export default ShopbyIngredient