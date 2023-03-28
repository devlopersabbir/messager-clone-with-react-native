import {
  Avatar,
  Button,
  Heading,
  HStack,
  Pressable,
  Text,
  VStack,
} from "native-base";
import React from "react";
import { TMessage } from "../../utils/Types";

interface IContactProps {
  data: TMessage;
  navigation?: any;
}
const Contact: React.FC<IContactProps> = ({ data, navigation }) => {
  return (
    <Pressable onPress={() => navigation.navigate("Chat")}>
      <HStack justifyContent="space-between">
        <HStack space={3} flex={1} overflow="hidden" w="full">
          <Avatar size="lg" source={{ uri: data?.avater }} />
          <VStack justifyContent="space-between">
            <Heading fontSize="19px" fontWeight="600">
              {data?.name}
            </Heading>
            <Text pr="50px">
              {data.message && data.message.substring(0, 50)}...
            </Text>
          </VStack>
        </HStack>
        <VStack alignItems="flex-end" justifyContent="space-between">
          <Text>{data?.lastSeen}</Text>
          <Button
            bg="lightBlue.400"
            color="white"
            py={1}
            px={2}
            textAlign="center"
            fontWeight="900"
            fontSize="16px"
            rounded="full"
          >
            {data?.unseenMessage}
          </Button>
        </VStack>
      </HStack>
    </Pressable>
  );
};

export default Contact;
