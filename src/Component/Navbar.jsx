import React from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Box,
  Flex,
  HStack,
  Icon,


} from '@chakra-ui/react'

import {
  HamburgerIcon,
  AddIcon,
  ExternalLinkIcon,
  RepeatIcon,
  EditIcon,
  SearchIcon,
  createIcon,
  
  
} from '@chakra-ui/icons'
import { Link } from 'react-router-dom'




// 1. Import

import { MdSettings,
  
} from 'react-icons/md'

import {BiShoppingBag} 
from 'react-icons/fa'
// 2. Use the `as` prop




const Navbar = () => {
  return (
    <>
      <Flex border='1px' h="90px" borderColor='gray.200' >
        <Box  margin="auto">

          <Menu>
            <MenuButton
              //IconButton
              as={HamburgerIcon}
              aria-label='Options'
              icon={<HamburgerIcon />}
              variant='outline'
            />
            <MenuList>
              <MenuItem icon={<AddIcon />} >
                What's New?

              </MenuItem>
              <MenuItem icon={<ExternalLinkIcon />} >
                TOP SUMMER PICKS
              </MenuItem>
              <MenuItem icon={<RepeatIcon />} >
                Best Sellers
              </MenuItem>
              <MenuItem icon={<EditIcon />} command='+'>
                SHOP BY INGREDIENTS
              </MenuItem>
              <MenuItem icon={<EditIcon />} >
                SHOP BY CONCERN
              </MenuItem>
              <MenuItem icon={<EditIcon />} >
                hair care

              </MenuItem>
              <MenuItem icon={<EditIcon />}>
                body care

              </MenuItem>
              <MenuItem icon={<EditIcon />} >
                know us better
              </MenuItem>
              <MenuItem icon={<EditIcon />} >
                PROFILE
              </MenuItem>
              <MenuItem icon={<EditIcon />} >
                LOGIN
              </MenuItem>
            </MenuList>

          </Menu>
        </Box>
        <Box style={{ margin: "auto" }}>
          <img src="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/unnamed_250x_200x_2x_260x_24408e11-6e3a-4a0c-8327-74d0455f7696_260x.jpg?v=1646547348" alt="" />
        </Box>
        
       
       
       
        <HStack margin="auto" >
 
  <Icon as={SearchIcon} w={6} h={6}/>

  {/* Use the `boxSize` prop to change the icon size */}
  <Icon as={SearchIcon} w={6} h={6} />

  {/* Use the `color` prop to change the icon color */}
  <Icon as={MdSettings}  w={6} h={6}/>
  <Icon as={MdSettings} w={6} h={6} />
</HStack>



  </Flex>

    </>
  )
}

export default Navbar