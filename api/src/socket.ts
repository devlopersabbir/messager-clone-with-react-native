import { Server as HttpServer } from "http";
import { Socket, Server } from "socket.io";

export class SocketServer {
  public static instance: SocketServer;
  public io: Server;
  socket: Socket | null;

  constructor(server: HttpServer) {
    SocketServer.instance = this;
    this.io = new Server(server);
    this.socket = null;
    console.log("Socket started");
    this.io.on("connect", this.StartListaning);
  }
  StartListaning = (socket: Socket) => {
    this.socket = socket;
    // console.log(socket.data);

    socket.on("connection", () => {
      console.log("A user connected");
    });
    /**
     * socket messesing
     */
    socket.on("send_message", async (payload, cb) => {
      try {
      } catch (error) {
        if (error) console.log("Create new message error or db error");
      }
    });
    /**
     * if any user disconnect from chat
     */
    socket.on("disconnect", () => {
      console.log("Socket disconnected!");
    });
  };
}
