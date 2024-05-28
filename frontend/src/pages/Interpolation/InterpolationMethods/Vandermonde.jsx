import React from "react";
import { Input, VStack, Heading, FormLabel, FormControl, FormErrorMessage, FormHelperText, Button, Container, SimpleGrid, Card, CardHeader, CardBody, CardFooter, Box, Text, List, ListIcon, ListItem, Radio, RadioGroup, Stack } from "@chakra-ui/react";
import { Table, Thead, Tbody, Tfoot, Tr, Th, Td, TableCaption, TableContainer } from '@chakra-ui/react'
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import { CheckCircleIcon } from '@chakra-ui/icons'
import axios from 'axios'



  const formSchema = yup
  .object({
    xvector: yup
      .string()
      .required('X vector is required.')
      .matches(/^-?\d+(?:\.\d+)?(?:,\s*-?\d+(?:\.\d+)?)*$/, 'Invalid X vector format (comma-separated numbers only, decimals allowed).')
      .min(1, 'X vector must have at least one element.'),
    yvector: yup
      .string()
      .required('Y vector is required.')
      .matches(/^-?\d+(?:\.\d+)?(?:,\s*-?\d+(?:\.\d+)?)*$/, 'Invalid Y vector format (comma-separated numbers only, decimals allowed).')
      .min(1, 'X vector must have at least one element.'),
  })
  .required();



const Vandermonde = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      xvector: [],
      yvector: [],
    },
  });


  const [responseData, setResponseData] = React.useState(null); // State to store API response

  const onSubmit = async (data) => {
    const xvectorArray = data.xvector.split(',').map(Number);
    const yvectorArray = data.yvector.split(',').map(Number);

    // Convert data to JSON
    const jsonData = {
      x: xvectorArray, // Use "x" key to match API format
      y: yvectorArray, // Use "y" key to match API format
    };

    try {
      const response = await axios.post('http://127.0.0.1:5000/interpolation/vandermonte',
        jsonData,
        { headers: { 'Content-Type': 'application/json' },
      });

      if (response.data) { // Check for data in response
        setResponseData(response.data); // Update state with response data
        console.log('Response from API:', response.data);
      } else {
        console.error('Empty response from API');
        // Handle empty response (optional)
      }
    } catch (error) {
      console.error('Error sending data:', error);
      // Handle errors appropriately (e.g., display error message to user)
    }
  };




  
  
  const onInvalid = () => null;
  React.useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <SimpleGrid columns={2} spacing={8}>

      <Container maxW='550px' color='black' >
        <VStack
          as="form"
          minWidth="30%"
          bgColor="#F5FFC6"
          padding="2em"
          borderRadius="12px"
          shadow="md"
          mt="4em"
          onSubmit={handleSubmit(onSubmit, onInvalid)}
        >
          <Heading>Vandermonde</Heading>

          <FormControl isInvalid={errors?.xvector} errortext={errors?.xvector?.message} isRequired>
            <FormLabel htmlFor="xvector">X vector</FormLabel>
            <Input
              type="text"
              {...register("xvector")}
              borderColor="#251605"
              borderWidth="2px"
              placeholder='1, 2, 3, 4'
            />
            {errors?.xvector ? (
              <FormErrorMessage>{errors?.xvector?.message}</FormErrorMessage>
            ) : (
              <FormHelperText></FormHelperText>
            )}
          </FormControl>

          <FormControl isInvalid={errors?.yvector} errortext={errors?.yvector?.message} isRequired>
            <FormLabel htmlFor="yvector">Y vector</FormLabel>
            <Input
              type="text"
              {...register("yvector")}
              borderColor="#251605"
              borderWidth="2px"
              placeholder='1, 5, 9, 16'
            />
            {errors?.yvector ? (
              <FormErrorMessage>{errors?.yvector?.message}</FormErrorMessage>
            ) : (
              <FormHelperText></FormHelperText>
            )}
          </FormControl>

          <br />

          <Button onClick={handleSubmit(onSubmit)} color='#F5FFC6' colorScheme='yellow' backgroundColor="yellow.900" size='lg' fontWeight={'bold'} width='33%' >
            Calculate
          </Button>

        </VStack>
      </Container>


<Container maxW='600px' color='black'>
<br></br>
<br></br>
<br></br>

  <Card backgroundColor='#F5FFC6' align={'center'} borderRadius="12px">
        <CardHeader>
          <Heading size='lg' fontWeight={'bold'}>Solution</Heading>
        </CardHeader>
        <CardBody>
        <Box bg='tomato' borderRadius="12px" w='100%' p={4} color='white'>
        {responseData}
        </Box>
        <br></br>
        </CardBody>
  </Card>

</Container>

<Container maxW='550px' color='black' >

<br></br>

  <Card backgroundColor='#F5FFC6'  borderRadius="12px">
        <CardHeader>
          <Heading size='lg' fontWeight={'bold'}>Help</Heading>
        </CardHeader>
        <CardBody>
          <List spacing={3} align={'left'}>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color='green.500' />
                El vector x no puede tener valores repetidos.
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color='green.500' />
                El vector x debe estar ordenado, es decir los valores deben ir de menor a mayor.
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color='green.500' />
                El vector y no puede tener valores repetidos.
              </ListItem>
              <ListItem fontWeight={"bold"}>
                <ListIcon as={CheckCircleIcon} color='green.500' />
                Los vectores deben tener el mismo numero de datos.
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color='green.500' />
                Escribe los vectores asi para evitar errores:
                <br></br>
                xvector: 1, 2, 3, 4
                <br></br>
                yvector: 1, 5, 9, 16
              </ListItem>

            </List>
            <br></br>

        </CardBody>
  </Card>
  <br></br>


</Container>

<Container maxW='1000px' color='black'>
        <br />
        <Card backgroundColor='#F5FFC6' borderRadius="12px">
          <CardHeader>
            <Heading size='lg' fontWeight={'bold'}>Graph</Heading>
            <br />
            <Text>Para graficar debes darle al botón +, poner la función y se te graficará automáticamente! </Text>
          </CardHeader>
          <CardBody>
            <iframe
              title="GeoGebra Calculator"
              src="https://www.geogebra.org/calculator"
              width="100%"
              height="500px"
              style={{ border: '0' }}
              allowFullScreen
            ></iframe>
          </CardBody>
        </Card>
        <br />
        <Card backgroundColor='#F5FFC6' borderRadius="12px">
          <CardHeader>
            <Heading size='lg' fontWeight={'bold'}>Download</Heading>
          </CardHeader>
          <CardBody>
            <Button color='#F5FFC6' colorScheme='yellow' backgroundColor="yellow.900" size='lg' fontWeight={'semibold'} width='50%'>
              <a href="http://127.0.0.1:5000/download3/solutionsChapter3.txt" download>
                solutionsChapter3.txt
              </a>
            </Button>
          </CardBody>
        </Card>
      </Container>




    </SimpleGrid>
  );
};

export default Vandermonde;
