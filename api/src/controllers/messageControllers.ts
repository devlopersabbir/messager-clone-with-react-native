import { Request, Response } from "express";

class messageControllers {
  /**
   * for getting message
   * method => get
   */
  public static async getMessage(req: Request, res: Response) {
    res.status(200).json({ message: "Hello" });
  }
}

export default messageControllers;
