import React, { PropsWithChildren, useReducer } from "react";

import {
  AuthContextProvider,
  AuthReducer,
  deafultAuthContextState,
} from "./Auth";

export interface IAuthContextProviderProps extends PropsWithChildren {}

const AuthContextComponent: React.FC<IAuthContextProviderProps> = ({
  children,
}) => {
  const [AuthState, AuthDispatch] = useReducer(
    AuthReducer,
    deafultAuthContextState
  );
  return (
    <AuthContextProvider value={{ AuthState, AuthDispatch }}>
      {children}
    </AuthContextProvider>
  );
};

export default AuthContextComponent;
