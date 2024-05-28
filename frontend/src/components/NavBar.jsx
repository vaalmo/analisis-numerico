import React from 'react';
import {Link} from 'react-router-dom';
import {Stack, Flex, Box, Heading, Spacer} from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react'







const NavBar=()=>{
    return (    
            <div className='navBar'>
                <Flex minWidth='max-content' alignItems='center' gap='2'>
                <Box>
                <Button color='#F5FFC6' colorScheme='yellow' backgroundColor="yellow.900" size='lg' fontWeight={'bold'} width='90%'>
                            <Link to="/">Home</Link>
                </Button>
                </Box>
                <Spacer />
                <ButtonGroup gap='5'>
                <Button color='#F5FFC6' colorScheme='yellow' backgroundColor="yellow.900" size='lg' fontWeight={'bold'} width='36%'>
                            <Link to="/non_linear">Non Linear</Link>
                        </Button>
                         <Button color='#F5FFC6' colorScheme='yellow' backgroundColor="yellow.900" size='lg' fontWeight={'bold'} width='33%'>
                            <Link to="/linear">Linear</Link>
                        </Button>
                        <Button color='#F5FFC6' colorScheme='yellow' backgroundColor="yellow.900" size='lg' fontWeight={'bold'} width='42%'>
                            <Link to="/interpolation">Interpolation</Link>
                        </Button>
                </ButtonGroup>
                </Flex>                      
            </div>
    )

}

export default NavBar;



