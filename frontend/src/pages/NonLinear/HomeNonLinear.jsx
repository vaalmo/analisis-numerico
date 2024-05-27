import React from 'react'
import {Button, Card, CardFooter, CardBody, Image, Text, SimpleGrid, CardHeader, Heading} from "@chakra-ui/react";
import { Link } from 'react-router-dom';
//import { SimpleGrid } from '@chakra-ui/react';
import bisectionimg from '../media/bisectionimg.jpg'
import rfimage from '../media/rfimage.jpg'
import fpimage from '../media/fpimage.jpg'
import secantimage from '../media/secantimage.jpg'
import multipleimage from '../media/multipleimage.jpg'

const HomeNonLinear = () => {
  return (
  
      <div>

         <br></br>
         <br></br>
        <SimpleGrid spacing={20} columns={3}>
          <Card backgroundColor='#F5FFC6' align={'center'} borderRadius="12px">
            <CardHeader>
              <Heading size='lg' fontWeight={'bold'}>Bisection</Heading>
            </CardHeader>
            <CardBody>
              <Image src={bisectionimg} alt="gato con botah" borderRadius="md" width={500}/>
            </CardBody>
            <CardFooter>
              <Button size='md' fontSize={'small'} color='#F5FFC6' colorScheme='yellow' backgroundColor="yellow.900" fontWeight={'bold'} width='100%'>
                <Link to="/non-linear/bisection">Vamos!</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card backgroundColor='#F5FFC6' align={'center'} borderRadius="12px">
            <CardHeader>
              <Heading size='lg' fontWeight={'bold'}>False Position</Heading>
            </CardHeader>
            <CardBody>
              <Image src={rfimage} alt="humpty dumpty hp" borderRadius="md" width={500} height={262}/>
            </CardBody>
            <CardFooter>
            <Button size='md' fontSize={'small'} color='#F5FFC6' colorScheme='yellow' backgroundColor="yellow.900" fontWeight={'bold'} width='100%'>
                <Link to="/non-linear/false-position">Vamos!</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card backgroundColor='#F5FFC6' align={'center'} borderRadius="12px">
            <CardHeader>
              <Heading size='lg' fontWeight={'bold'}>Fixed Point</Heading>
            </CardHeader>
            <CardBody>
              <Image src={fpimage} alt="kiti" borderRadius="md" width={500} height={265}/>
            </CardBody>
            <CardFooter>
            <Button size='md' fontSize={'small'} color='#F5FFC6' colorScheme='yellow' backgroundColor="yellow.900" fontWeight={'bold'} width='100%'>
                <Link to="/non-linear/fixed-point">Vamos!</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card backgroundColor='#F5FFC6' align={'center'} borderRadius="12px">
            <CardHeader>
              <Heading size='lg' fontWeight={'bold'}>Secant</Heading>
            </CardHeader>
            <CardBody>
              <Image src={secantimage} alt="gato con botah" borderRadius="md" width={500} height={262}/>
            </CardBody>
            <CardFooter>
            <Button size='md' fontSize={'small'} color='#F5FFC6' colorScheme='yellow' backgroundColor="yellow.900" fontWeight={'bold'} width='100%'>
                <Link to="/non-linear/secant">Vamos!</Link>
              </Button>
            </CardFooter>
          </Card>
          <Card backgroundColor='#F5FFC6' align={'center'} borderRadius="12px">
            <CardHeader>
              <Heading size='lg' fontWeight={'bold'}>Multiple Roots</Heading>
            </CardHeader>
            <CardBody>
              <Image src={multipleimage} alt="perro" borderRadius="md" width={500} height={262}/>
            </CardBody>
            <CardFooter>
            <Button size='md' fontSize={'small'} color='#F5FFC6' colorScheme='yellow' backgroundColor="yellow.900" fontWeight={'bold'} width='100%'>
                <Link to="/non-linear/multiple-roots">Vamos!</Link>
              </Button>
            </CardFooter>
          </Card>

        </SimpleGrid>

      </div>



  )
}

export default HomeNonLinear;

