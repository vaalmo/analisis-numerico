import React from 'react'
import shrek2 from './shrek2.jpg'
import xd from './xd.jpg'
import { SimpleGrid, Card, CardHeader, CardBody, CardFooter, Image, Text, Heading, Button } from "@chakra-ui/react";
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (


<div>

<br></br>
<br></br>
<SimpleGrid spacing={10} columns={2}>
 <Card backgroundColor='#F5FFC6' align={'center'} borderRadius="12px">
   <CardBody>
     <Image src={xd} alt="shurek" borderRadius="md" width={900} height={500} align={'center'}/>
   </CardBody>
 </Card>
 <Card backgroundColor='#F5FFC6' borderRadius="12px">
  <CardHeader>
  <Heading size='lg' fontWeight={'bold'}>Calculadora de Métodos</Heading>
  </CardHeader>
   <CardBody>
     <Text>Hola que tal amigos guapisimos, aqui vegeta 777, comentando analisis numerico!</Text>
     <Text>algunos consejillos pa vosotros!</Text>
   </CardBody>

 </Card>
 

</SimpleGrid>

</div>



  )
}

export default LandingPage





