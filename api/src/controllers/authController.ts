import { Request, Response } from "express";
import { User } from "../entity/User";
import { compare, hash } from "bcrypt";

class AuthController {
  /**
   * url => /api/v1/auth/register
   * method => POST
   * @param req
   * @param res
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
    } catch (error) {}
  }
  /**
   * url => /api/v1/auth/login
   * method => POST
   * @param req
   * @param res
   * access => both
   */
  public static async login(req: Request, res: Response) {
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

      res.status(200).json({ message: "Login successfull" });
    } catch (error) {}
  }
}

export default AuthController;
