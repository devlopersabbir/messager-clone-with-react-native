import { Entypo, FontAwesome } from "@expo/vector-icons";
import { HStack, Icon, Pressable, TextArea } from "native-base";
import React from "react";

const TypeBox = () => {
  return (
    <HStack
      p={4}
      space={3}
      bg="gray.200"
      rounded="3xl"
      borderBottomLeftRadius="0"
      borderBottomRightRadius="0"
      alignItems="center"
      w="full"
      justifyContent="flex-start"
      overflow="hidden"
      safeAreaBottom
    >
      <Pressable>
        <Icon size="2xl" color="gray.900" as={<Entypo name="emoji-flirt" />} />
      </Pressable>

      <TextArea
        autoCompleteType={false}
        type="text"
        h="10"
        w="full"
        variant="unstyled"
        placeholder="Let's type here..."
        fontSize="xl"
        overflowY="scroll"
        flex={1}
      />

      <Pressable onPress={() => console.log("hello")}>
        <Icon size="2xl" color="blue.400" as={<FontAwesome name="send" />} />
      </Pressable>
    </HStack>
  );
};

export default TypeBox;
