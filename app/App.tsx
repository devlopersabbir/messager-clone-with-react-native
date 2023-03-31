import React from "react";
import AppContainer from "./src/components/AppContainer";
import AuthContextProvider from "./src/context/Auth/AuthContextComponent";
import MainScreen from "./src/screens/MainScreen";

const App = () => {
  return (
    <AuthContextProvider>
      <AppContainer>
        <MainScreen />
      </AppContainer>
    </AuthContextProvider>
  );
};

export default App;
