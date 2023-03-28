import { MaterialIcons } from "@expo/vector-icons";
import { Button, Center, Text } from "native-base";
import React, { useState } from "react";
import { TFooterItem } from "../../../utils/Types";

interface ICommonButton {
  item: TFooterItem;
}
const CommonButton: React.FC<ICommonButton> = ({ item }) => {
  return (
    <Button variant="unstyled" p={0}>
      <Center>
        <MaterialIcons name={item?.iconName} size={28} />
        <Text fontWeight="500" fontSize="16px">
          {item?.name}
        </Text>
      </Center>
    </Button>
  );
};

export default CommonButton;
