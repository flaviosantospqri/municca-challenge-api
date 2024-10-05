import { Request, Response, Router } from "express";
import { UserController } from "../controllers/userController";

const router = Router();
const userController = new UserController();

router.post("/user", async (req: Request, res: Response) => {
  await userController.createUser(req, res);
});
router.get("/user/:id", async (req: Request, res: Response) => {
  await userController.getUserWithDocument(req, res);
});

router.get("/users", async (req: Request, res: Response) => {
  await userController.findAllUsers(req, res);
});

router.delete("/user/:id", async (req: Request, res: Response) => {
  await userController.deleteUser(req, res);
});
router.patch("/user/:id", async (req: Request, res: Response) => {
  await userController.updateUser(req, res);
});
export { router };
