import { Request, Response, Router } from "express";
import { CreateUserController } from "./controllers/userController";

const router = Router();

const createUser = new CreateUserController();

router.post("/user", async (req: Request, res: Response) => {
  console.log(req.body);
  await createUser.handle(req, res);
});

export { router };
