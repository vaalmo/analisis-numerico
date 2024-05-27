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
  Stack

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

//const phoneRegExp =
//  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const formSchema = yup
  .object({

    functionf: yup
      .string()
      .required("Function f is required"),
    functionf1: yup
      .string()
      .required("Function f' is required"),
    functionf2: yup
      .string()
      .required("Function f'' is required"),
    initialvalue: yup
      .number()
      .required("initial value is required"),
    tolerance: yup
      .number()
      .required("tolerance is required"),
    maxiter: yup
      .number()
      .required("maxiter is required"),
    errortype: yup.number(),
  })
  .required();

const MultipleRoots = () => {
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
  const onSubmit = (data) => console.log(data);
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
      <Heading>Multiple Roots</Heading>
      <FormControl>
        <FormLabel htmlFor="functionf">Function f</FormLabel>
        <Input type="text" {...register("functionf")} borderColor="#251605" borderWidth="2px" placeholder='exp(x) - x - 1'/>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="functionf1">Function f' (first derivative of f)</FormLabel>
        <Input type="text" {...register("functionf1")} borderColor="#251605" borderWidth="2px" placeholder='exp(x) - 1'/>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="functionf2">Function f'' (second derivative of f)</FormLabel>
        <Input type="text" {...register("functionf2")} borderColor="#251605" borderWidth="2px" placeholder='exp(x)'/>
      </FormControl>      
      <FormControl>
        <FormLabel htmlFor="initialvalue">Initial value (x0)</FormLabel>
        <Input type="number" {...register("initialvalue")} borderColor="#251605" borderWidth="2px" placeholder='1'/>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="tolerance">Tolerance</FormLabel>
        <Input type="number" {...register("tolerance")} borderColor="#251605" borderWidth="2px" placeholder='1e-7'/>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="maxiter">Max Iterations</FormLabel>
        <Input type="number" {...register("maxiter")} borderColor="#251605" borderWidth="2px" placeholder='100'/>
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


      <Button color='#F5FFC6' colorScheme='yellow' backgroundColor="yellow.900" size='lg' fontWeight={'bold'} width='33%'>
        Submit
      </Button>


    </VStack>
    </Container>

    <Container maxW='600px' color='black'>
    <br></br>
    <br></br>
    <br></br>

      <Card backgroundColor='#F5FFC6' align={'center'} borderRadius="12px">
            <CardHeader>
              <Heading size='lg' fontWeight={'bold'}>Table</Heading>
            </CardHeader>
            <CardBody>
            <TableContainer>
                <Table variant='simple'>
                  <Thead>
                    <Tr>
                      <Th isNumeric>n</Th>
                      <Th isNumeric>xi</Th>
                      <Th isNumeric>xs</Th>
                      <Th isNumeric>E</Th>
                      <Th isNumeric>fm</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    <Tr>
                      <Td isNumeric>0</Td>
                      <Td isNumeric>-1.0</Td>
                      <Td isNumeric>7.0</Td>
                      <Td isNumeric>1.0001</Td>
                      <Td isNumeric>1.5</Td>
                    </Tr>

                    
                  </Tbody>
                  <Tfoot>
                    <Tr>
                      <Th>.. es raiz de f(x)</Th>
                    </Tr>
                  </Tfoot>
                </Table>
              </TableContainer>
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
                    La convergencia decrece o para si hay alguna division por 0.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                    Asegurate de que las derivadas de la funcion sean correctas.
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
                </List>
                <br></br>

            </CardBody>
      </Card>
      <br></br>


    </Container>

    <Container maxW='550px' color='black' >

    <br></br>

      <Card backgroundColor='#F5FFC6'  borderRadius="12px">
            <CardHeader>
              <Heading size='lg' fontWeight={'bold'}>Graph</Heading>
            </CardHeader>
            <CardBody>
              <Text>hola soy una grafica :p</Text>
            </CardBody>
      </Card>
    </Container>

  </SimpleGrid>
  );
};

export default MultipleRoots;


