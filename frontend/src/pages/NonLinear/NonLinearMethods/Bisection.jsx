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
  RadioGroup,
  Stack,
  Radio,
  Checkbox,
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
    lowint: yup
      .number()
      .required("low interval is required"),
    highint: yup
      .number()
      .required("high interval is required"),
    tolerance: yup
      .number()
      .required("tolerance is required"),
    maxiter: yup
      .number()
      .required("maxiter is required")
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
    defaultValues: {
      radio: "1",
    },
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
      <Heading>Bisection</Heading>
      <FormControl>
        <FormLabel htmlFor="function">Function</FormLabel>
        <Input type="text" {...register("function")} />
        <FormHelperText>ex. log(sin(x)^2 + 1)-(1/2)</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="lowint">Lower interval value (a)</FormLabel>
        <Input type="number" {...register("lowint")} />
        <FormHelperText>ex. 0</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="highint">Higher interval value (b)</FormLabel>
        <Input type="number" {...register("highint")} />
        <FormHelperText>ex. 1</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="tolerance">Tolerance</FormLabel>
        <Input type="number" {...register("tolerance")} />
        <FormHelperText>ex. 1e-5</FormHelperText>
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="maxiter">Max Iterations</FormLabel>
        <Input type="number" {...register("tolerance")} />
        <FormHelperText>ex. 100</FormHelperText>
      </FormControl>
      <br></br>


      <Button
        type="submit"
        colorScheme="blue"
        backgroundColor="blue.400"
        width="30%"
      >
        Submit
      </Button>
    </VStack>
  );
};

export default Bisection;


