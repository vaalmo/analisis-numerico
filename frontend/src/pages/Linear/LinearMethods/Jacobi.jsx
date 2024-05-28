import React from "react";
import { Input, VStack, Heading, FormLabel, FormControl, FormErrorMessage, FormHelperText, Button, Container, SimpleGrid, Card, CardHeader, CardBody, Box, Text, List, ListIcon, ListItem } from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { CheckCircleIcon } from '@chakra-ui/icons';
import axios from 'axios';

const formSchema = yup.object({
  A: yup
  .string()
  .required('Matrix A is required.')
  .matches(/^-?\d+(?:\.\d+)?(?:,\s*-?\d+(?:\.\d+)?)*$/, 'Invalid matrix format. Use commas to separate elements.'),
  b: yup
  .string()
  .required('Y vector is required.')
  .matches(/^-?\d+(?:\.\d+)?(?:,\s*-?\d+(?:\.\d+)?)*$/, 'Invalid Y vector format (comma-separated numbers only, decimals allowed).')
  .min(1, 'Y vector must have at least one element.'),
  x0: yup
    .string()
    .required('X vector is required.')
    .matches(/^-?\d+(?:\.\d+)?(?:,\s*-?\d+(?:\.\d+)?)*$/, 'Invalid X vector format (comma-separated numbers only, decimals allowed).')
    .min(1, 'X vector must have at least one element.'),
  tolerance: yup
    .number()
    .required(),
  maxiter: yup
    .number()
    .positive()
    .required(),
}).required();

const Jacobi = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      x0: '',
      b: '',
      tolerance: '',
      maxiter: '',
      A: '',
    },
  });

  const [responseData, setResponseData] = React.useState(null);

  const onSubmit = async (data) => {

    // Dividing A into rows of equal length
    const Amatrix = [];
    const flatA = data.A.split(',').map(Number);
    const numRows = Math.sqrt(flatA.length);
    for (let i = 0; i < numRows; i++) {
      Amatrix.push(flatA.slice(i * numRows, (i + 1) * numRows));
    }

    const bvectorArray = data.b.split(',').map(Number);
    const xvectorArray = data.x0.split(',').map(Number);
    const tolerance = data.tolerance;
    const maxiter = data.maxiter;



    console.log(Amatrix, bvectorArray, xvectorArray, tolerance, maxiter);

    const jsonData = {
      A: Amatrix,
      b: bvectorArray,
      x0: xvectorArray,
      tolerance: tolerance,
      maxiter: maxiter,

    };

    console.log("datos jeison", jsonData)

    try {
      const response = await axios.post('http://127.0.0.1:5000/linear/jacobi',
        jsonData,
        { headers: { 'Content-Type': 'application/json' } });

      if (response.data) {
        setResponseData(response.data);
        console.log('Response from API:', response.data);
      } else {
        console.error('Empty response from API');
      }
    } catch (error) {
      console.error('Error sending data:', error);
    }
  };

  const onInvalid = () => null;
  React.useEffect(() => {
    console.log(errors);
  }, [errors]);

  return (
    <SimpleGrid columns={2} spacing={8}>
      <Container maxW='550px' color='black'>
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
          <Heading>Jacobi</Heading>

          <FormControl isInvalid={errors?.A}>
            <FormLabel htmlFor="A">Matrix A</FormLabel>
            <Input
              type="text"
              {...register("A")}
              borderColor="#251605"
              borderWidth="2px"
              placeholder='1,2,3,4,5,6,7,8,9'
            />
            {errors?.A ? (
              <FormErrorMessage>{errors?.A?.message}</FormErrorMessage>
            ) : (
              <FormHelperText></FormHelperText>
            )}
          </FormControl>

          <FormControl isInvalid={errors?.b} errortext={errors?.b?.message} isRequired>
            <FormLabel htmlFor="b">Solution vector (b)</FormLabel>
            <Input
              type="text"
              {...register("b")}
              borderColor="#251605"
              borderWidth="2px"
              placeholder='1, 5, 9, 16'
            />
            {errors?.b ? (
              <FormErrorMessage>{errors?.b?.message}</FormErrorMessage>
            ) : (
              <FormHelperText></FormHelperText>
            )}
          </FormControl>


          <FormControl isInvalid={errors?.x0} errortext={errors?.x0?.message} isRequired>
            <FormLabel htmlFor="x0">Initial condition (x0)</FormLabel>
            <Input
              type="text"
              {...register("x0")}
              borderColor="#251605"
              borderWidth="2px"
              placeholder='1, 2, 3, 4'
            />
            {errors?.x0 ? (
              <FormErrorMessage>{errors?.x0?.message}</FormErrorMessage>
            ) : (
              <FormHelperText></FormHelperText>
            )}
          </FormControl>



          <FormControl isInvalid={errors?.tolerance} errortext={errors?.tolerance?.message} isRequired>
            <FormLabel htmlFor="tolerance">Tolerance</FormLabel>
            <Input type="number" {...register("tolerance")} borderColor="#251605" borderWidth="2px" placeholder='1e-5' />
            {errors?.tolerance ? (
              <FormErrorMessage>{errors?.tolerance?.message}</FormErrorMessage>
            ) : (
              <FormHelperText></FormHelperText>
            )}
          </FormControl>

          <FormControl isInvalid={errors?.maxiter} errortext={errors?.maxiter?.message} isRequired>
            <FormLabel htmlFor="maxiter">Max Iterations</FormLabel>
            <Input type="number" {...register("maxiter")} borderColor="#251605" borderWidth="2px" placeholder='100' />
            {errors?.maxiter ? (
              <FormErrorMessage>{errors?.maxiter?.message}</FormErrorMessage>
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
        <br />
        <br />
        <br />

        <Card backgroundColor='#F5FFC6' align={'center'} borderRadius="12px">
              <CardHeader>
                <Heading size='lg' fontWeight={'bold'}>Solution</Heading>
              </CardHeader>
              <CardBody>
              {responseData && Array.isArray(responseData) ? (
                responseData.map((solution, index) => (
                  <Box key={index} bg='tomato' borderRadius="12px" w='100%' p={4} color='white' mb='2em'>  {/* Added margin-bottom */}
                    <Text fontWeight={'bold'}>Solution x{index + 1}: {solution}</Text>
                  </Box>
                ))
              ) : (
                <Box bg='tomato' borderRadius="12px" w='100%' p={4} color='white'>
                  <Text>{responseData}</Text>
                </Box>
              )}
              <br></br>
              </CardBody>
            </Card>
      </Container>

      <Container maxW='550px' color='black'>
        <br />

        <Card backgroundColor='#F5FFC6' borderRadius="12px">
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
                El determinante de la matriz A no puede ser 0.
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color='green.500' />
                La matriz A no puede tener algun elemento en su diagonal que sea 0.
              </ListItem>
              <ListItem fontWeight={"bold"}>
                <ListIcon as={CheckCircleIcon} color='green.500' />
                Los vectores deben tener el mismo número de datos.
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color='green.500' />
                Escribe los vectores así para evitar errores:
                <br />
                b: 1, 2, 3, 4
                <br />
                x0: 0, 0, 0, 0
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color='green.500' />
                Escribe la matriz A de esta manera (todos los elementos separados por comas):
                <br />
                A: 1,2,3,4,5,6,7,8,9
              </ListItem>
              <ListItem>
                <ListIcon as={CheckCircleIcon} color='green.500' />
                Asegurate de que la matriz sea cuadrada, para evitar errores.
                <br />
                A: 1,2,3,4,5,6,7,8,9
                <br />
                A es cuadrada de orden 3x3.
              </ListItem>
            </List>
            <br />
          </CardBody>
        </Card>
        <br />
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
              <a href="http://127.0.0.1:5000/download2/solutionsChapter2.txt" download>
                solutionsChapter2.txt
              </a>
            </Button>
          </CardBody>
        </Card>
      </Container>
    </SimpleGrid>
  );
};

export default Jacobi;
