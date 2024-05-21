import React from 'react';
import {Link} from 'react-router-dom';
import {Stack} from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react'



import { extendTheme } from '@chakra-ui/react'

export const theme = extendTheme({
  colors: {
    brand: {
      50: '#f7fafc',
      
      500: '#718096',
      
      900: '#171923',
    }
  }
})





import { defineStyle, defineStyleConfig } from '@chakra-ui/react'

const outline = defineStyle({
  border: '2px dashed', // change the appearance of the border
  borderRadius: 0, // remove the border radius
  fontWeight: 'semibold', // change the font weight
})

export const buttonTheme = defineStyleConfig({
  variants: { outline },
})



const NavBar=()=>{
    return (    
                <div className='navBar'>
                <Stack spacing={4} direction='row' align='center'>
                        <Button colorScheme='yellow' backgroundColor="yellow.900" size='lg'>
                            <Link to="/">Home</Link>
                        </Button>
                        <Button colorScheme='yellow' backgroundColor="yellow.900" size='lg'>
                            <Link to="/non-linear">NonLinear</Link>
                        </Button>
                         <Button colorScheme='yellow' backgroundColor="yellow.900" size='lg'>
                            <Link to="/linear">Linear</Link>
                        </Button>
                        <Button colorScheme= 'yellow' backgroundColor="yellow.900" size='lg'>
                            <Link to="/interpolation">Interpolation</Link>
                        </Button>
                </Stack>
              </div>
    )

}

export default NavBar;




<Button
type="submit"
colorScheme="blue"
backgroundColor="blue.400"
width="100%"
>
Submit
</Button>






/* <Flex minWidth='max-content' alignItems='center' gap='2'>
  <Box p='2'>
    <Heading size='md'>Chakra App</Heading>
  </Box>
  <Spacer />
  <ButtonGroup gap='2'>
    <Button colorScheme='teal'>Sign Up</Button>
    <Button colorScheme='teal'>Log in</Button>
  </ButtonGroup>
</Flex> */