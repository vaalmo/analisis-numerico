import React from "react";
import {
  Input,
  VStack,
  Heading,
  FormLabel,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Button,
  Container,
  SimpleGrid,
  Card,
  CardHeader,
  CardBody, 
  CardFooter, 
  Text,
  List,
  ListIcon,
  ListItem,
  Radio, 
  RadioGroup,
  Stack, Box

} from "@chakra-ui/react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { Link } from "react-router-dom";
import {CheckCircleIcon} from '@chakra-ui/icons'
import axios from 'axios'

//const phoneRegExp =
//  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const formSchema = yup
  .object({

    functionf: yup
      .string()
      .required(),
    functiong: yup
      .string()
      .required(),
    initialvalue: yup
      .number()
      .required(),
    tolerance: yup
      .number()
      .required(),
    maxiter: yup
      .number()
      .positive()
      .required(),
    errortype: yup.number(),
  })
  .required();

const FixedPoint = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {
      errortype: "0",
    },
  });


  const [responseData, setResponseData] = React.useState(null);

  const onSubmit = async (data) => {
    const jsonData = {
      functionf: data.functionf,
      functiong: data.functiong,
      initialvalue: data.initialvalue,
      tolerance: data.tolerance,
      maxiter: data.maxiter,
      errortype: data.errortype
    };

    try {
      const response = await axios.post('http://127.0.0.1:5000/non_linear/fixed_point', jsonData, { headers: { 'Content-Type': 'application/json' } });
      if (response.data) {
        setResponseData(response.data);
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
      <Heading>Fixed Point</Heading>

        <FormControl isInvalid={errors?.functionf} errortext={errors?.functionf?.message} isRequired>
        <FormLabel htmlFor="functionf">Function f</FormLabel>
        <Input type="text" {...register("functionf")} borderColor="#251605" borderWidth="2px" placeholder='-7 * np.log(x) + x - 11'/>
        {errors?.functionf ? (
          <FormErrorMessage>{errors?.functionf?.message}</FormErrorMessage>
        ) : (
          <FormHelperText></FormHelperText>
        )}
      </FormControl>


      <FormControl isInvalid={errors?.functiong} errortext={errors?.functiong?.message} isRequired>
        <FormLabel htmlFor="functiong">Function g</FormLabel>
        <Input type="text" {...register("functiong")} borderColor="#251605" borderWidth="2px" placeholder='7 * np.log(x) + 11'/>
        {errors?.functiong ? (
          <FormErrorMessage>{errors?.functiong?.message}</FormErrorMessage>
        ) : (
          <FormHelperText></FormHelperText>
        )}
      </FormControl>

      <FormControl isInvalid={errors?.initialvalue} errortext={errors?.initialvalue?.message} isRequired>
        <FormLabel htmlFor="initialvalue">Initial value (x0)</FormLabel>
        <Input type="number" {...register("initialvalue")} borderColor="#251605" borderWidth="2px" placeholder='-0.5'/>
        {errors?.initialvalue ? (
          <FormErrorMessage>{errors?.initialvalue?.message}</FormErrorMessage>
        ) : (
          <FormHelperText></FormHelperText>
        )}
      </FormControl>


      <FormControl isInvalid={errors?.tolerance} errortext={errors?.tolerance?.message} isRequired>
        <FormLabel htmlFor="tolerance">Tolerance</FormLabel>
        <Input type="number" {...register("tolerance")} borderColor="#251605" borderWidth="2px" placeholder='1e-5'/>
        {errors?.tolerance ? (
          <FormErrorMessage>{errors?.tolerance?.message}</FormErrorMessage>
        ) : (
          <FormHelperText></FormHelperText>
        )}
      </FormControl>


      <FormControl isInvalid={errors?.maxiter} errortext={errors?.maxiter?.message} isRequired>
        <FormLabel htmlFor="maxiter">Max Iterations</FormLabel>
        <Input type="number" {...register("maxiter")} borderColor="#251605" borderWidth="2px" placeholder='100'/>
        {errors?.maxiter ? (
          <FormErrorMessage>{errors?.maxiter?.message}</FormErrorMessage>
        ) : (
          <FormHelperText></FormHelperText>
        )}
      </FormControl>

      <FormControl isInvalid={errors?.errortype}>
        <FormLabel>Error Type</FormLabel>
        <Controller
          name="errortype"
          control={control}
          render={({ field: { onChange, value } }) => (
            <RadioGroup onChange={onChange} value={value}>
              <Stack direction="row">
                <Radio value="0">Relative</Radio>
                <Radio value="1">Absolute</Radio>
              </Stack>
            </RadioGroup>
          )}
        />
      </FormControl>
      <br></br>


      <Button onClick={handleSubmit(onSubmit)} color='#F5FFC6' colorScheme='yellow' backgroundColor="yellow.900" size='lg' fontWeight={'bold'} width='33%' >
        Calculate
      </Button>






    </VStack>
    </Container>

    <Container  minWidth='600px' maxW="1500px" width={'1200px'} color='black'>
        <br />
        <br />
        <br />

        <Card backgroundColor='#F5FFC6' align={'center'} borderRadius="12px">
          <CardHeader>
            <Heading size='lg' fontWeight={'bold'}>Solution</Heading>
          </CardHeader>
          <CardBody>
            {responseData && Array.isArray(responseData) ? (
              <>
                <TableContainer>
                  <Table variant='striped' colorScheme='orange'>
                    <Thead>
                      <Tr>
                        {responseData[0][0].map((header, index) => (
                          <Th key={index}>{header}</Th>
                        ))}
                      </Tr>
                    </Thead>
                    <Tbody>
                      {responseData[0].slice(1).map((row, index) => (
                        <Tr key={index}>
                          {row.map((cell, cellIndex) => (
                            <Td key={cellIndex}>{cell}</Td>
                          ))}
                        </Tr>
                      ))}
                    </Tbody>
                  </Table>
                </TableContainer>
                <Box bg='tomato' borderRadius="12px" w='100%' p={4} color='white' mt='2em'>
                  <Text fontWeight={'bold'}>{responseData[1]} es una aproximación de una raiz de f(x)</Text>
                </Box>
              </>
            ) : (
              <Box bg='tomato' borderRadius="12px" w='100%' p={4} color='white'>
                <Text>{responseData}</Text>
              </Box>
            )}
            <br />
            <br />
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
                    Las funciones deben ser continuas y diferenciables.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                    Asegurate de que la funcion tenga raiz.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                    El valor inicial es importante para el metodo.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                    La tolerancia debe tener un valor positivo.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                    El número de iteraciones debe ser positivo.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                    Para escribir la funcion correcatamente debe ser en este formato:
                    <br/>
                    np.log(np.sin(x)**2 + 1)-(1/2)
                    <br/>
                    (debes poner 'np.' antes de usar funciones como log(x), sin(x), cos(x), etc.)
                    <br />
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                    Para mas informacion dale un vistazo a la documentacion de numpy.
                    <br />
                    <br />
                    <Button color='#F5FFC6' colorScheme='yellow' backgroundColor="yellow.900" size='lg' fontWeight={'semibold'} width='70%'>
                      <Link to="https://numpy.org/doc/stable/user/index.html#user">Numpy's User Guide</Link>
                    </Button>
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
        <br></br>
        <Card backgroundColor='#F5FFC6' borderRadius="12px">
          <CardHeader>
            <Heading size='lg' fontWeight={'bold'}>Download</Heading>
          </CardHeader>
          <CardBody>
            <Button color='#F5FFC6' colorScheme='yellow' backgroundColor="yellow.900" size='lg' fontWeight={'semibold'} width='70%'>
              <a href="http://127.0.0.1:5000/download/solutionsChapter1.txt" download>
                Download solutionsChapter1.txt
              </a>
            </Button>
          </CardBody>
        </Card>
      </Container>

  </SimpleGrid>
  );
};

export default FixedPoint;


