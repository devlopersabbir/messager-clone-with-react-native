import { VStack, Box, Text } from "native-base";
import React from "react";

interface IMessage {
  type: string;
}
const Message: React.FC<IMessage> = ({ type }) => {
  return (
    <>
      {type === "fnd" ? (
        <VStack space={1} mr={20}>
          <Box
            bg="gray.100"
            p={3}
            borderTopRightRadius="2xl"
            borderBottomLeftRadius="2xl"
            borderBottomRightRadius="2xl"
          >
            <Text fontSize="md" fontWeight="500">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,
              soluta.
            </Text>
          </Box>
          <Text>12:52 PM</Text>
        </VStack>
      ) : (
        // my
        <VStack space={1} ml={20}>
          <Box
            bg="blue.600"
            p={3}
            borderTopLeftRadius="2xl"
            borderBottomLeftRadius="2xl"
            borderBottomRightRadius="2xl"
          >
            <Text fontSize="md" fontWeight="500" color="white">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quasi,
              soluta.
            </Text>
          </Box>
          <Text textAlign="right">12:52 PM</Text>
        </VStack>
      )}
    </>
  );
};

export default Message;
