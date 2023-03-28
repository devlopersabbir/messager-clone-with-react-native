import { Flex, ScrollView, VStack } from "native-base";
import React, { useEffect, useState } from "react";
import { Dimensions } from "react-native";
import Contact from "../../components/Home/Contact";
import Topbar from "../../components/Home/Topbar";
import Footer from "../../components/Layout/Footer/Footer";
import { ContactMessage } from "../../utils/Data";
import { HomeScreen } from "../../utils/PageTypes";

const Home = ({ navigation }: HomeScreen) => {
  const [screenHeight, setScreenHeight] = useState<number>(100);
  useEffect(() => {
    setScreenHeight(Dimensions.get("window").height);
  }, [screenHeight]);
  return (
    <Flex flex={1}>
      <Topbar />
      <ScrollView px={3} h="auto" showsVerticalScrollIndicator={false}>
        <VStack space={5} mt={4} mb={7}>
          {ContactMessage.map((item: any, index: number) => (
            <Contact key={index} navigation={navigation} data={item} />
          ))}
        </VStack>
      </ScrollView>
      <Footer />
    </Flex>
  );
};

export default Home;
