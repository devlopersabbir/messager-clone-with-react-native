import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Chat from "../../screens/Chat/Chat";
import Details from "../../screens/Details/Details";
import Home from "../../screens/Home/Home";
import { RootStackParamsList } from "../../utils/PageTypes";

const RootStack = createNativeStackNavigator<RootStackParamsList>();

const UserLayout = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          animation: "default",
          headerShown: false,
        }}
      >
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Chat" component={Chat} />
        <RootStack.Screen name="Details" component={Details} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default UserLayout;
