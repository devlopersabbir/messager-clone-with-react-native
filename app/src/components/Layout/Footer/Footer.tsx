import { MaterialIcons } from "@expo/vector-icons";
import { Button, Center, HStack, View } from "native-base";
import React from "react";
import { FooterItem } from "../../../utils/Data";
import { TFooterItem } from "../../../utils/Types";
import CommonButton from "../../common/Home/CommonButton";

const Footer = () => {
  return (
    <HStack
      safeAreaBottom
      py={5}
      px={12}
      bg="white"
      justifyContent="space-between"
      style={{
        shadowColor: "rgba(196,196,196)",
        shadowOpacity: 0.2,
        shadowOffset: { width: 0, height: -7 },
        shadowRadius: 10,
      }}
      rounded="3xl"
    >
      {/* <Button
        variant="unstyled"
        bg="lightBlue.500"
        rounded="full"
        p={3}
        borderWidth="6"
        borderColor="white"
        position="absolute"
        top={-35}
        left="50%"
      >
        <Center>
          <MaterialIcons name="call" size={32} />
        </Center>
      </Button> */}
      {FooterItem.map((item: TFooterItem) => (
        <CommonButton key={item?.id} item={item} />
      ))}
    </HStack>
  );
};

export default Footer;
