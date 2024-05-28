import React from 'react'
import {Button, Card, CardFooter, CardBody, Image, Text, SimpleGrid, CardHeader, Heading} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
//import { SimpleGrid } from '@chakra-ui/react';
import gaussseidelimage from '../media/gaussseidelimage.jpg'
import jacobi from '../media/jacobi.jpg'
import sor from '../media/sor.jpg'


const HomeLinear = () => {
  return (
  
      <div>

         <br></br>
         <br></br>
        <SimpleGrid spacing={20} columns={3} align={'left'}>
          <Card backgroundColor='#F5FFC6' borderRadius="12px">
            <CardHeader>
              <Heading size='lg' fontWeight={'bold'}>Gauss-Seidel</Heading>
            </CardHeader>
            <CardBody>
              <Image src={gaussseidelimage} alt="gato con botah" borderRadius="md" width={500} height={262}/>
            </CardBody>
            <CardFooter>
              <Button size='md' fontSize={'small'} color='#F5FFC6' colorScheme='yellow' backgroundColor="yellow.900" fontWeight={'bold'} width='100%'>
                <Link to="/linear/gausseidel">Vamos!</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card backgroundColor='#F5FFC6'  borderRadius="12px">
            <CardHeader>
              <Heading size='lg' fontWeight={'bold'}>Jacobi</Heading>
            </CardHeader>
            <CardBody>
              <Image src={jacobi} alt="humpty dumpty hp" borderRadius="md" width={500} height={262}/>
            </CardBody>
            <CardFooter>
            <Button size='md' fontSize={'small'} color='#F5FFC6' colorScheme='yellow' backgroundColor="yellow.900" fontWeight={'bold'} width='100%'>
                <Link to="/linear/jacobi">Vamos!</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card backgroundColor='#F5FFC6'  borderRadius="12px">
            <CardHeader>
              <Heading size='lg' fontWeight={'bold'}>SOR</Heading>
            </CardHeader>
            <CardBody>
              <Image src={sor} alt="kiti" borderRadius="md" width={500} height={265}/>
            </CardBody>
            <CardFooter>
            <Button size='md' fontSize={'small'} color='#F5FFC6' colorScheme='yellow' backgroundColor="yellow.900" fontWeight={'bold'} width='100%'>
                <Link to="/linear/sor">Vamos!</Link>
              </Button>
            </CardFooter>
          </Card>

        </SimpleGrid>

      </div>



  )
}

export default HomeLinear;

