import { NativeBaseProvider, ScrollView } from "native-base";
import React from "react";
import { SafeAreaView } from "react-native";
import { theme } from "../theme/Theme";
import Constants from "expo-constants";

interface IAppContainer {
  children: React.ReactNode;
}
const AppContainer: React.FC<IAppContainer> = ({ children }) => {
  return (
    <NativeBaseProvider theme={theme}>
      {/* <SafeAreaView
        style={{
          flex: 1,
          // marginLeft: 10,
          // marginRight: 10,
          // marginBottom: 10,
          // marginTop: Constants.statusBarHeight,
        }}
      > */}
      {children}
      {/* </SafeAreaView> */}
    </NativeBaseProvider>
  );
};

export default AppContainer;
