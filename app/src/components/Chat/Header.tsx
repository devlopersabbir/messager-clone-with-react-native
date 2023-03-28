import { MaterialIcons } from "@expo/vector-icons";
import {
  Avatar,
  Heading,
  HStack,
  Icon,
  Pressable,
  Text,
  VStack,
} from "native-base";
import React from "react";

interface IChatHeaderProps {
  navigation: any;
}

const Header: React.FC<IChatHeaderProps> = ({ navigation }) => {
  return (
    <HStack
      justifyContent="space-between"
      px={4}
      bg="gray.200"
      h="32"
      pt={3}
      rounded="3xl"
      borderTopLeftRadius="0"
      borderTopRightRadius="0"
      alignItems="center"
    >
      <Pressable onPress={() => navigation.navigate("Details")}>
        <HStack
          space={3}
          flex={1}
          overflow="hidden"
          w="full"
          alignItems="center"
        >
          <Avatar size="lg">
            <Avatar.Badge bg="green.500" />
          </Avatar>
          <VStack space={1}>
            <Heading fontSize="20px" fontWeight="600" color="gray.500">
              Tanvir Hossain
            </Heading>
            <Text color="green.500" fontSize="16px" fontWeight="500">
              Online
            </Text>
          </VStack>
        </HStack>
      </Pressable>
      <HStack alignItems="flex-end" justifyContent="space-between" space={3}>
        <Pressable>
          <Icon
            size="2xl"
            color="cyan.400"
            as={<MaterialIcons name="videocam" />}
          />
        </Pressable>
        <Pressable>
          <Icon
            size="2xl"
            color="green.400"
            as={<MaterialIcons name="add-call" />}
          />
        </Pressable>
      </HStack>
    </HStack>
  );
};

export default Header;
