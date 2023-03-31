import React, { createContext } from "react";

export interface User {
  uuid: string;
  id?: number;
  name?: string;
  username: string;
  image?: string;
}

export interface Session {
  user: User;
  accessToken: string;
}

export interface IAuthContextState {
  session: Session | undefined;
}

export const deafultAuthContextState: IAuthContextState = {
  session: undefined,
};

export type TAuthContextAction = "set_auth" | "unset_auth";

export type TAuthContextPaload = Session | undefined;

export interface IAuthContextAction {
  type: TAuthContextAction;
  payload: TAuthContextPaload;
}

export const AuthReducer = (
  state: IAuthContextState,
  action: IAuthContextAction
) => {
  switch (action.type) {
    case "set_auth": {
      return { ...state, session: action.payload as Session };
    }
    default: {
      return { ...state };
    }
  }
};

interface IAuthContextProps {
  AuthState: IAuthContextState;
  AuthDispatch: React.Dispatch<IAuthContextAction>;
}

const AuthContext = createContext<IAuthContextProps>({
  AuthState: deafultAuthContextState,
  AuthDispatch: () => {},
});

export const AuthContextConsumer = AuthContext.Consumer;
export const AuthContextProvider = AuthContext.Provider;

export default AuthContext;
