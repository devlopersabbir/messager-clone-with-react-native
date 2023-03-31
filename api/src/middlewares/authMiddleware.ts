import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { User } from "../entity/User";

const authentication = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader?.startsWith("Bearer "))
    return res.status(401).json({ message: "Unauthorized" });

  const token = authHeader.split(" ")[1];

  verify(
    token,
    process.env.ACCESS_TOKEN_SECRET as string,
    async (error: any, decoded: any) => {
      if (error) return res.status(403).json({ message: "Forbidden" });
      const user = await User.findOne({
        where: { username: decoded?.username },
      });
      if (!user) return res.status(401).json({ message: "Unauthorized" });

      // req.user = user;
      next();
    }
  );
};

export default authentication;
