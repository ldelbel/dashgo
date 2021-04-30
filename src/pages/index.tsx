import { Flex, Button, Stack } from "@chakra-ui/react";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../components/Form/Input";
import { useRouter } from "next/router";

type SigninFormData = {
  email: string;
  password: string;
};

const signInFormSchema = yup.object().shape({
  email: yup.string().required('This field is required').email('Invalid e-mail'),
  password: yup.string().required('This field is required'),
});

export default function SignIn() {
  const { register, handleSubmit, formState } = useForm({
    resolver: yupResolver(signInFormSchema),
  });
  const router = useRouter();

  const handleSignIn: SubmitHandler<SigninFormData> = async (
    values,
    event
  ) => {
    // SubmitHandler comes from react-hook and brings typed event so we can use
    await new Promise((resolve) => setTimeout(resolve, 2000)); // this is just to take a while to login, so the loading animation can be seen
    router.push('dashboard')
  };

  return (
    <Flex w="100vw" h="100vh" alignItems="center" justifyContent="center">
      <Flex
        as="form"
        w="100%"
        maxWidth={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
        onSubmit={handleSubmit(handleSignIn)} // this allows handleSignIn to receive data from the refs of the input
      >
        <Stack spacing="4">
          <Input
            type="email"
            name="email"
            label="E-mail"
            error={formState.errors.email}
            {...register("email")}
          />
          <Input
            type="password"
            name="password"
            label="Password"
            error={formState.errors.password}
            {...register("password")}
          />
        </Stack>

        <Button
          type="submit"
          mt="6"
          colorScheme="pink"
          size="lg"
          isLoading={formState.isSubmitting}
        >
          Login
        </Button>
      </Flex>
    </Flex>
  );
}
