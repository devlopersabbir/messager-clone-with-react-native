import { ScrollView, View, VStack } from "native-base";
import React, { useEffect } from "react";
import Header from "../../components/Chat/Header";
import Message from "../../components/Chat/Message";
import TypeBox from "../../components/Chat/TypeBox";
import { ChatScreen, DetailsScreen } from "../../utils/PageTypes";
import { socket } from "../../utils/socket/socket";

const Chat = ({ navigation }: ChatScreen) => {
  useEffect(() => {
    socket;
  }, []);
  return (
    <View flex={1} bg="white">
      <Header navigation={navigation} />
      <ScrollView showsVerticalScrollIndicator={false} bg="white" pt={2} px={3}>
        <VStack space={3}>
          <Message type="fnd" />
          <Message type="my" />
          <Message type="fnd" />
          <Message type="fnd" />
          <Message type="my" />
          <Message type="fnd" />
          <Message type="my" />
          <Message type="my" />
        </VStack>
      </ScrollView>
      <TypeBox />
    </View>
  );
};

export default Chat;
