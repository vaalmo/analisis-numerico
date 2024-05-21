import React from 'react'
import {Button} from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const HomeNonLinear = () => {
  return (
  
//  <div className='nonlinearhome'>
//     <Button colorScheme='teal' size='lg'>
//       <Link to="/non-linear/bisection">Bisection Method</Link>
//     </Button>
//  </div>

<div>Hola no lineales, q mas bien?
<br></br>
<br></br>
  <Button colorScheme='yellow' size='lg'>
    <Link to="/non-linear/bisection">Bisection</Link>
  </Button>
  <br></br>
  <br></br>
  <Button colorScheme='yellow' size='lg'>
    <Link to="/non-linear/fixed-point">Fixed Point</Link>
  </Button>
  <br></br>
  <br></br>
  <Button colorScheme='yellow' size='lg'>
    <Link to="/non-linear/false-position">False Position</Link>
  </Button>
  <br></br>
  <br></br>
  <Button colorScheme='yellow' size='lg'>
    <Link to="/non-linear/secant">Secant</Link>
  </Button>
  <br></br>
  <br></br>
  <Button colorScheme='yellow' size='lg'>
    <Link to="/non-linear/multiple-roots">Multiple Roots</Link>
  </Button>
</div>



  )
}

export default HomeNonLinear

