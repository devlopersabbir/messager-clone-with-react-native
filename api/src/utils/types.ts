export interface JwtPayloadObj {
  uuid: string;
  username: string;
}
export interface User {
  uuid: string;
  id: string;
  name?: string;
  username: string;
  image?: string;
}

export interface ServerToClientEvents {
  noArg: () => void;
  basicEmit: (a: number, b: string, c: Buffer) => void;
  withAck: (d: string, callback: (e: number) => void) => void;
}

export interface ClientToServerEvents {
  hello: () => void;
}

export interface InterServerEvents {
  ping: () => void;
}

export interface SocketData {
  user: User;
}
