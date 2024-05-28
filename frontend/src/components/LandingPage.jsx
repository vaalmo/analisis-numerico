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
     <Text fontWeight={'semibold'} fontSize={15}>¡Hola, joven aventurero! </Text>
     <br></br>
     <Text fontWeight={'semibold'} fontSize={15}>Soy Shrek, el ogro favorito de todos, y hoy te guiaré a través de una maravilla del pantano: ¡una calculadora de métodos numéricos! Este programa no es tan complicado como una cebolla, pero es igual de útil. Aquí podrás resolver ecuaciones, encontrar raíces y mucho más usando técnicas matemáticas que hasta Burro encontraría impresionantes. Así que, ponte cómodo, agarra tu sombrero de matemático, y prepárate para adentrarte en el mágico mundo de los métodos numéricos. ¡Comencemos esta aventura matemática!</Text>
     <br></br>
     <Text fontWeight={'semibold'} fontSize={15}>Te voy a contar un secreto, pero no se lo digas a nadie (especialmente a Lord Farquaad).</Text>
     <Text fontWeight={'semibold'} fontSize={15}>Nuestra calculadora tiene tres opciones en la parte de arriba, más emocionantes que un burro parlante:</Text>
     <br></br>
     <Text fontWeight={'bold'} fontSize={15}>Métodos Lineales, Métodos No Lineales, Métodos de Interpolación</Text>
     <br></br>
     <Text fontWeight={'semibold'} fontSize={15}>Así que elige una opción, dale caña y demuestra que eres más listo que un ogro. ¡Vamos allá, campeón! ¡Que los números estén contigo!</Text>

     


   </CardBody>


 </Card>
 

</SimpleGrid>

</div>



  )
}

export default LandingPage





