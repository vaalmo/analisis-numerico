

import React from "react";
import {
  Input,
  VStack,
  Heading,
  FormLabel,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Button
} from "@chakra-ui/react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";

//const phoneRegExp =
//  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const formSchema = yup
  .object({
    function: yup
    .string()
    .required("Function is required"),
    //.matches(phoneRegExp, "It doesn't seem to be a valid function!")
    //.length(11, "Phone number is too short"),
    lowint: yup
    .number()
    .required("low interval is required"),
    highint: yup
    .number()
    .required("high interval is required"),
    tolerance: yup
    .number()
    .required("tolerance is required"),
    maxiter: yip
    .number()
    .required("maxiter is required")

      //definir criterio para ver que el numero de iteraciones no sea negativo
  })
  .required();

const Bisection = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(formSchema),
    defaultValues: {},
  });
  const onSubmit = (data) => console.log(data);
  const onInvalid = () => null;
  React.useEffect(() => {
    console.log(errors);
  }, [errors]);
  return (

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
      <Heading>Bisection Method</Heading>
      <FormControl isInvalid={errors?.function}>
        <FormLabel htmlFor="function">Function</FormLabel>
        <Input {...register("function")} />
        {errors?.function ? (
          <FormErrorMessage>{errors.function.message}</FormErrorMessage>
        ) : (
          <FormHelperText>log(sin(x)^2 + 1)-(1/2)</FormHelperText>
        )}
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="lowint">Lower interval value (a)</FormLabel>
        <Input type="text" {...register("lowint")} />
        <FormHelperText>0</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="highint">Higher interval value (b)</FormLabel>
        <Input type="text" {...register("highint")} />
        <FormHelperText>1</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="tolerance">Tolerance</FormLabel>
        <Input type="number" {...register("tolerance")} />
        <FormHelperText>1e-5</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="maxiter">Max Iterations</FormLabel>
        <Input type="number" {...register("tolerance")} />
        <FormHelperText>100</FormHelperText>
      </FormControl>



      <Button
        type="submit"
        colorScheme="blue"
        backgroundColor="cyan.400"
        width="100%"
      >
        Submit
      </Button>
    </VStack>
  );
};

export default Bisection;


/* <Flex align="flex-start" bgColor="#F6F6F9" justify="center" width="100%" height="100vh"></Flex> */


