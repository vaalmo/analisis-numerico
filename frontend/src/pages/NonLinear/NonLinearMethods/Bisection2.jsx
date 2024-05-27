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

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const formSchema = yup
  .object({
    name: yup.string(),
    email: yup
      .string()
      .email("Please introduce a valid email")
      .required("Email is required"),
    phoneNumber: yup
      .string()
      .matches(phoneRegExp, "It doesn't seem to be a phone number")
      .length(11, "Phone number is too short"),
    multiple: yup
      .array()
      .of(yup.string())
      .ensure()
      .compact()
      .min(1, "I bet you like one of those").required(),
    radio: yup.string(),
  })
  .required();

const Bisection2 = () => {
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
      <Heading>User details</Heading>
      <FormControl>
        <FormLabel htmlFor="name">Name</FormLabel>
        <Input type="text" {...register("name")} />
        <FormHelperText>Your first name</FormHelperText>
      </FormControl>
      <FormControl isInvalid={errors?.email}>
        <FormLabel htmlFor="email">Email address</FormLabel>
        <Input type="text" {...register("email")} />
        {errors?.email ? (
          <FormErrorMessage>{errors.email.message}</FormErrorMessage>
        ) : (
          <FormHelperText>We'll never share your email.</FormHelperText>
        )}
      </FormControl>
      <FormControl isInvalid={errors?.phoneNumber}>
        <FormLabel htmlFor="phoneNumber">Phone Number</FormLabel>
        <Input {...register("phoneNumber")} />
        {errors?.email ? (
          <FormErrorMessage>{errors.phoneNumber.message}</FormErrorMessage>
        ) : (
          <FormHelperText>Your daily phone number is fine.</FormHelperText>
        )}
      </FormControl>
      <FormControl isInvalid={errors?.radio}>
        <FormLabel>Choose one</FormLabel>
        <Controller
          name="radio"
          control={control}
          render={({ field: { onChange, value } }) => (
            <RadioGroup onChange={onChange} value={value}>
              <Stack direction="row">
                <Radio value="1">Beach🏖️</Radio>
                <Radio value="2">Mountain 🏔️</Radio>
              </Stack>
            </RadioGroup>
          )}
        />
          <FormHelperText>Choose your favorite place for vacations</FormHelperText>
      </FormControl>
      <FormControl isInvalid={errors?.multiple}>
        <FormLabel>Choose many</FormLabel>
        <Stack direction="row">
          <Checkbox value="1" {...register("multiple")}>
          Pizza🍕
          </Checkbox>
          <Checkbox value="2" {...register("multiple")}>
          Hamburger🍔
          </Checkbox>
          <Checkbox value="2" {...register("multiple")}>
          Hot dog🌭
          </Checkbox>
        </Stack>
        {errors?.multiple ? (
          <FormErrorMessage>{errors.multiple.message}</FormErrorMessage>
        ) : (
          <FormHelperText>Choose your favorites fast food.</FormHelperText>
        )}
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

export default Bisection2;


