import { Request, Response } from "express";
import { User } from "../entity/User";
import { compare, hash } from "bcrypt";
import { sign } from "jsonwebtoken";
import { JwtPayloadObj } from "../utils/types";

class AuthController {
  /**
   * url => /api/v1/auth/register
   * method => POST
   * access => both
   */
  public static async register(req: Request, res: Response) {
    const { username, name, password, image } = req.body;
    if (!username || !password)
      return res.status(400).json({
        message: "Username & Password required!",
      });
    const hassPass = await hash(password, 10);
    if (!hassPass)
      return res.status(400).json({ message: "Fail to has password!" });
    try {
      const isUser = await User.findOne({ where: { username } });
      if (isUser)
        return res.status(404).json({ message: "Username already exits!" });

      const createUser = User.create({
        username,
        name,
        password: hassPass,
        image,
      });
      await createUser.save();
      res.status(201).json({ message: `Hi ${name}` });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server error", error });
    }
  }
  /**
   * url => /api/v1/auth/login
   * method => POST
   * access => both
   */
  public static async login(req: Request, res: Response) {
    console.log(req.body);
    const { username, password } = req.body;
    if (!username || !password)
      return res.status(400).json({ message: "Username & Password required!" });

    try {
      const isUser = await User.findOne({ where: { username } });
      if (!isUser)
        return res.status(404).json({ message: "Invalid username!" });
      const comparePassword = await compare(password, isUser?.password);
      if (!comparePassword)
        return res.status(404).json({ message: "Password incrorrect!" });

      const payload: JwtPayloadObj = {
        uuid: isUser.uuid,
        username: isUser.username,
      };
      const accessToken = sign(payload, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "30d",
      });
      if (!accessToken)
        return res.status(500).json({ message: "Fail to create accessToken" });
      res.status(200).json({ message: "Login successfull", accessToken });
    } catch (error) {
      console.log(error);
      res.status(500).json({ message: "Server error", error });
    }
  }
}

export default AuthController;
