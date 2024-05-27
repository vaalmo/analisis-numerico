import React from 'react';
import {Link} from 'react-router-dom';
import {Stack} from '@chakra-ui/react';
import { Button, ButtonGroup } from '@chakra-ui/react'







const NavBar=()=>{
    return (    
                <div className='navBar'>
                <Stack spacing={6} direction='row' align={'right'}>
                        <Button color='#F5FFC6' colorScheme='yellow' backgroundColor="yellow.900" size='lg' fontWeight={'bold'} width='33%'>
                            <Link to="/">Home</Link>
                        </Button>
                        <Button color='#F5FFC6' colorScheme='yellow' backgroundColor="yellow.900" size='lg' fontWeight={'bold'} width='33%'>
                            <Link to="/non-linear">NonLinear</Link>
                        </Button>
                         <Button color='#F5FFC6' colorScheme='yellow' backgroundColor="yellow.900" size='lg' fontWeight={'bold'} width='33%'>
                            <Link to="/linear">Linear</Link>
                        </Button>
                        <Button color='#F5FFC6' colorScheme='yellow' backgroundColor="yellow.900" size='lg' fontWeight={'bold'} width='40%'>
                            <Link to="/interpolation">Interpolation</Link>
                        </Button>
                </Stack>
              </div>
    )

}

export default NavBar;



