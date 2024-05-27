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
      .required(),
    initialvalue0: yup
      .number()
      .required(),
    initialvalue1: yup
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

const Secant = () => {
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
      <Heading>Secant</Heading>

        <FormControl isInvalid={errors?.functionf} errortext={errors?.functionf?.message} isRequired>
        <FormLabel htmlFor="functionf">Function f</FormLabel>
        <Input type="text" {...register("functionf")} borderColor="#251605" borderWidth="2px" placeholder='log(sin(x)^2 + 1)-(1/2)-x'/>
        {errors?.functionf ? (
          <FormErrorMessage>{errors?.functionf?.message}</FormErrorMessage>
        ) : (
          <FormHelperText></FormHelperText>
        )}
      </FormControl>

      <FormControl isInvalid={errors?.initialvalue0} errortext={errors?.initialvalue0?.message} isRequired>
        <FormLabel htmlFor="initialvalue0">Initial value (x0)</FormLabel>
        <Input type="number" {...register("initialvalue0")} borderColor="#251605" borderWidth="2px" placeholder='0'/>
        {errors?.initialvalue0 ? (
          <FormErrorMessage>{errors?.initialvalue0?.message}</FormErrorMessage>
        ) : (
          <FormHelperText></FormHelperText>
        )}
      </FormControl>

      <FormControl isInvalid={errors?.initialvalue1} errortext={errors?.initialvalue1?.message} isRequired>
        <FormLabel htmlFor="initialvalue1">Initial value (x1)</FormLabel>
        <Input type="number" {...register("initialvalue1")} borderColor="#251605" borderWidth="2px" placeholder='1'/>
        {errors?.initialvalue1 ? (
          <FormErrorMessage>{errors?.initialvalue1?.message}</FormErrorMessage>
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
                    El método requiere dos valores iniciales que deben elegirse cerca de la raíz, para que este converja mas rapido.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                    Asegurate de que la funcion tenga raiz.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                    La tolerancia debe tener un valor positivo.
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckCircleIcon} color='green.500' />
                    Ambos valores, a y b, deben existir en la función.
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

export default Secant;


