import { Button, Center, Input, Text, VStack } from "native-base";
import React, { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  // submit from
  const fromSubmit = async () => {};
  return (
    <Center h="full" w="full" px={10}>
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
          Login
        </Button>
      </VStack>
    </Center>
  );
};

export default Login;
