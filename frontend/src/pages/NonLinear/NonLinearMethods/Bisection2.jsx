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

    <FormControl isInvalid={errors?.functionf} errortext={errors?.functionf?.message} isRequired>
    <FormLabel htmlFor="functionf">Function f</FormLabel>
    <Input type="text" {...register("functionf")} borderColor="#251605" borderWidth="2px" placeholder='exp(x) - x - 1'/>
    {errors?.functionf ? (
      <FormErrorMessage>{errors?.functionf?.message}</FormErrorMessage>
    ) : (
      <FormHelperText></FormHelperText>
    )}
  </FormControl>


  <FormControl isInvalid={errors?.functionf1} errortext={errors?.functionf1?.message} isRequired>
    <FormLabel htmlFor="functionf1">Function f' (first derivative of f)</FormLabel>
    <Input type="text" {...register("functionf1")} borderColor="#251605" borderWidth="2px" placeholder='exp(x) - 1'/>
    {errors?.functionf1 ? (
      <FormErrorMessage>{errors?.functionf1?.message}</FormErrorMessage>
    ) : (
      <FormHelperText></FormHelperText>
    )}
  </FormControl>

  <FormControl isInvalid={errors?.functionf2} errortext={errors?.functionf2?.message} isRequired>
    <FormLabel htmlFor="functionf2">Function f'' (second derivative of f)</FormLabel>
    <Input type="text" {...register("functionf2")} borderColor="#251605" borderWidth="2px" placeholder='exp(x)'/>
    {errors?.functionf2 ? (
      <FormErrorMessage>{errors?.functionf2?.message}</FormErrorMessage>
    ) : (
      <FormHelperText></FormHelperText>
    )}
  </FormControl>


  <FormControl isInvalid={errors?.initialvalue} errortext={errors?.initialvalue?.message} isRequired>
    <FormLabel htmlFor="initialvalue">Initial value (x0)</FormLabel>
    <Input type="number" {...register("initialvalue")} borderColor="#251605" borderWidth="2px" placeholder='1'/>
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