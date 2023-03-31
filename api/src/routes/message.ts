import { Router } from "express";
import messageControllers from "../controllers/messageControllers";
import authentication from "../middlewares/authMiddleware";
("../controllers/messageControllers");

const router = Router();

router.get("/get-message", authentication, messageControllers.getMessage);

export default router;
