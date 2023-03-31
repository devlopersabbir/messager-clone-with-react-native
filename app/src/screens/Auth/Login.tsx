import {
  Button,
  Center,
  Heading,
  Input,
  Spinner,
  Text,
  useToast,
  VStack,
} from "native-base";
import React, { useState } from "react";
import useAuth from "../../hooks/useAuth";
import { axiosPublic } from "../../utils/axios/axios";
import { LoginScreen } from "../../utils/PageTypes";

const Login = ({ navigation }: LoginScreen) => {
  const toast = useToast();
  const { setAuth } = useAuth();
  const [loading, setLoading] = useState<boolean>(false);
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // submit from
  const fromSubmit = async () => {
    setLoading(true);
    try {
      const { data } = await axiosPublic.post("/auth/login", {
        username,
        password,
      });
      console.log(data);
      toast.show({ description: data?.message });
      // setAuth({accessToken})
      navigation.navigate("Home");
      setLoading(false);
    } catch (error: any) {
      if (error) {
        const mess = error?.response?.data;
        toast.show({ description: mess?.message });
        setLoading(false);
      }
    }
  };
  return (
    <Center h="full" w="full" px={10}>
      <Heading my={3} fontSize="3xl">
        Login
      </Heading>
      <VStack space={3} w="full" alignItems="center">
        <Input
          isRequired
          onChangeText={(username) => setUsername(username)}
          px={4}
          placeholder="Username"
          fontSize="18px"
          keyboardType="email-address"
          variant="unstyled"
          borderBottomColor="gray.500"
          borderBottomWidth="1"
        />
        <Input
          isRequired
          type="password"
          onChangeText={(password) => setPassword(password)}
          px={4}
          placeholder="Password"
          fontSize="18px"
          keyboardType="email-address"
          variant="unstyled"
          borderBottomColor="gray.500"
          borderBottomWidth="1"
        />
        <Button
          variant="solid"
          w="full"
          borderRadius="lg"
          bg="coolGray.300"
          _text={{ fontSize: "xl", fontWeight: "600", color: "black" }}
          _pressed={{ bg: "coolGray.400" }}
          onPress={fromSubmit}
        >
          {loading ? <Spinner /> : "Login"}
        </Button>
        <Text>OR</Text>
        <Button
          variant="solid"
          w="full"
          borderRadius="lg"
          bg="coolGray.300"
          _text={{ fontSize: "xl", fontWeight: "600", color: "black" }}
          _pressed={{ bg: "coolGray.400" }}
          onPress={() => navigation.push("Singup")}
        >
          Create new account
        </Button>
      </VStack>
    </Center>
  );
};

export default Login;
