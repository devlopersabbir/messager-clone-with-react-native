import { MaterialIcons } from "@expo/vector-icons";
import {
  Avatar,
  Heading,
  HStack,
  Icon,
  IconButton,
  Text,
  View,
  VStack,
} from "native-base";
import React from "react";
import CustomTab from "../../components/Details/CustomTab";
import { DetailsScreen } from "../../utils/PageTypes";

const Details = ({ navigation }: DetailsScreen) => {
  return (
    <View my={8}>
      <VStack alignItems="center" space="2">
        <Avatar size="2xl">
          <Avatar.Badge bg="green.500" />
        </Avatar>
        <VStack space={0} alignItems="center">
          <Heading fontSize="2xl" fontWeight="bold">
            Sabbir Hossain
          </Heading>
          <Text fontSize="20px" fontWeight="500" color="green.500">
            Online
          </Text>
        </VStack>
      </VStack>
      <HStack my={7} w="full" justifyContent="space-between" px={8}>
        <IconButton
          bg="gray.100"
          rounded="lg"
          p={2}
          icon={
            <Icon
              size="10"
              color="gray.500"
              as={<MaterialIcons name="notifications" />}
            />
          }
        />
        <IconButton
          bg="gray.100"
          rounded="lg"
          p={2}
          icon={
            <Icon
              size="10"
              color="gray.500"
              as={<MaterialIcons name="videocam" />}
            />
          }
        />
        <IconButton
          bg="gray.100"
          rounded="lg"
          p={2}
          icon={
            <Icon
              size="10"
              color="gray.500"
              as={<MaterialIcons name="call" />}
            />
          }
        />
        <IconButton
          bg="gray.100"
          rounded="lg"
          p={2}
          icon={
            <Icon
              size="10"
              color="gray.500"
              as={<MaterialIcons name="settings" />}
            />
          }
        />
      </HStack>
      <CustomTab />
    </View>
  );
};

export default Details;
