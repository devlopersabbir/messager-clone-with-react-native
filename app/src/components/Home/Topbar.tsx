import { AntDesign } from "@expo/vector-icons";
import { VStack, HStack, Text, Button, ScrollView, View } from "native-base";
import React from "react";
import { ContactMessage } from "../../utils/Data";
import CommonAvater from "../common/Home/CommonAvater";

const Topbar = () => {
  return (
    <VStack
      space={3}
      px={3}
      safeAreaTop={true}
      pb={4}
      bg="white"
      borderRadius="3xl"
    >
      <Text color="blue.600" fontSize="md">
        Pinded Message
      </Text>

      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <HStack alignItems="center" space={3}>
          <VStack alignItems="center">
            <Button p={0} w="65px" h="65px" rounded="full">
              <AntDesign name="plus" size={32} color="white" />
            </Button>
            <Text>Add</Text>
          </VStack>
          {ContactMessage.map((item: any, index: number) => (
            <CommonAvater key={index} data={item} />
          ))}
        </HStack>
      </ScrollView>
    </VStack>
  );
};

export default Topbar;
