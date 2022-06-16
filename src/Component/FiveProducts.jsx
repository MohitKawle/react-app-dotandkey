import React from 'react'

import {
    Box,
    Center,
    useColorModeValue,
    Heading,
    Text,
    Stack,
    Image,
    Flex,
  } from '@chakra-ui/react';


const FiveProducts = () => {
  return (
    <Flex w={["200%", "150%", "100%"]} justifyContent="space-between" overflowX="scroll"	 h='320px' marginTop='0px' >
        {/* <Box margin='auto' shadow="5px">
            <img src="" alt="" />
        </Box>
        <Box margin='auto'>
            <img src=" alt="" />
        </Box>
        <Box margin='auto'>
            <img src= alt="" />
        </Box>
        <Box margin='auto'>
            <img src= alt="" />
        </Box>
        <Box margin='auto'>
            <img src= alt="" />
        </Box> */}
   <ProductSimple image={image1}  title={title1}/>
   <ProductSimple image={image2}  title={title2}/>
   <ProductSimple image={image3}  title={title3}/>
   <ProductSimple image={image4}  title={title4}/>
   <ProductSimple image={image5}  title={title5}/>
       
     

    </Flex>
  )
}

export default FiveProducts



 const image1='https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Untitled-1_6_256x256_18109629-935e-4b4a-b57d-bafd137dfc3d.jpg?v=1652335902'
 const title1="BODY"


 const image2 = "https://cdn.shopify.com/s/files/1/0361/8553/8692/files/2_10_256x256_8bff7558-6bbe-48bf-ab39-7374e49719bf.jpg?v=1652335951"
const title2="HAIR"

const image3="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/3_11_256x256_e7c09569-74b4-4d0c-9051-26ab4e442e4a.jpg?v=1652335973"
const title3="NUTRITION"

const image4="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/1_19_256x256_9865ad78-1e72-4e98-bc3e-4e23cf20f9f1.jpg?v=1652335996"
const title4="SERUM"

const image5="https://cdn.shopify.com/s/files/1/0361/8553/8692/files/Untitled-1_7_256x256_e1449924-9374-406e-b826-3f1c0613bcec.jpg?v=1652336019"
const title5="MOISTURIZER"





 function ProductSimple(props) {
  const image=props.image;
  const title=props.title;

  return (
    <Center py={12}>
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        bg={useColorModeValue('white', 'gray.800')}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
            backgroundImage: `url(${image})`,
            filter: 'blur(15px)',
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={image}
          />
        </Box>
        <Stack pt={10} align={'center'}>
          <Text color={'gray.500'} fontSize={'sm'} textTransform={'uppercase'}>
            {title}
          </Text>
         
       
     
         
        
        </Stack>
      </Box>
    </Center>
  );
}


