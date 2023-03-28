import { NavigationContainer } from "@react-navigation/native";
import {
  createNativeStackNavigator,
  NativeStackHeaderProps,
} from "@react-navigation/native-stack";
import React from "react";
import { RootStackParamsList } from "../utils/PageTypes";
import Login from "./Auth/Login";
import Singup from "./Auth/Singup";
import Chat from "./Chat/Chat";
import Details from "./Details/Details";
import Home from "./Home/Home";
import Welcome from "./Welcome/Welcome";

const RootStack = createNativeStackNavigator<RootStackParamsList>();

const MainScreen = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator
        screenOptions={{
          animation: "default",
          headerShown: false,
        }}
      >
        <RootStack.Screen name="Welcome" component={Welcome} />
        <RootStack.Screen name="Singup" component={Singup} />
        <RootStack.Screen name="Login" component={Login} />
        {/* after login then access */}
        <RootStack.Screen name="Home" component={Home} />
        <RootStack.Screen name="Chat" component={Chat} />
        <RootStack.Screen name="Details" component={Details} />
      </RootStack.Navigator>
    </NavigationContainer>
  );
};

export default MainScreen;
