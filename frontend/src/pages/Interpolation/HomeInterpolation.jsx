import React from 'react'
import {Button, Card, CardFooter, CardBody, Image, Text, SimpleGrid, CardHeader, Heading} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
//import { SimpleGrid } from '@chakra-ui/react';
import lagrange from '../media/lagrange.jpg'
import newton from '../media/newton.jpg'
import spline from '../media/spline.jpg'
import vandermondes from '../media/vandermondes.jpg'


const HomeInterpolation = () => {
  return (
  
      <div>

         <br></br>
         <br></br>
        <SimpleGrid spacing={20} columns={3} align={'left'}>
          <Card backgroundColor='#F5FFC6'  borderRadius="12px">
            <CardHeader>
              <Heading size='lg' fontWeight={'bold'}>Lagrange</Heading>
            </CardHeader>
            <CardBody>
              <Image src={lagrange} alt="gato con botah" borderRadius="md" width={500} height={262}/>
            </CardBody>
            <CardFooter>
              <Button size='md' fontSize={'small'} color='#F5FFC6' colorScheme='yellow' backgroundColor="yellow.900" fontWeight={'bold'} width='100%'>
                <Link to="/interpolation/lagrange">Vamos!</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card backgroundColor='#F5FFC6'  borderRadius="12px">
            <CardHeader>
              <Heading size='lg' fontWeight={'bold'}>Newton</Heading>
            </CardHeader>
            <CardBody>
              <Image src={newton} alt="humpty dumpty hp" borderRadius="md" width={500} height={262}/>
            </CardBody>
            <CardFooter>
            <Button size='md' fontSize={'small'} color='#F5FFC6' colorScheme='yellow' backgroundColor="yellow.900" fontWeight={'bold'} width='100%'>
                <Link to="/interpolation/newtonint">Vamos!</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card backgroundColor='#F5FFC6'  borderRadius="12px">
            <CardHeader>
              <Heading size='lg' fontWeight={'bold'}>Spline</Heading>
            </CardHeader>
            <CardBody>
              <Image src={spline} alt="kiti" borderRadius="md" width={500} height={265}/>
            </CardBody>
            <CardFooter>
            <Button size='md' fontSize={'small'} color='#F5FFC6' colorScheme='yellow' backgroundColor="yellow.900" fontWeight={'bold'} width='100%'>
                <Link to="/interpolation/spline">Vamos!</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card backgroundColor='#F5FFC6'  borderRadius="12px">
            <CardHeader>
              <Heading size='lg' fontWeight={'bold'}>Vandermonde</Heading>
            </CardHeader>
            <CardBody>
              <Image src={vandermondes} alt="gato con botah" borderRadius="md" width={500} height={262}/>
            </CardBody>
            <CardFooter>
            <Button size='md' fontSize={'small'} color='#F5FFC6' colorScheme='yellow' backgroundColor="yellow.900" fontWeight={'bold'} width='100%'>
                <Link to="/interpolation/vandermonte">Vamos!</Link>
              </Button>
            </CardFooter>
          </Card>

        </SimpleGrid>

      </div>



  )
}

export default HomeInterpolation;

