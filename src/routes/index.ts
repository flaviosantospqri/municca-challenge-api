import { Request, Response, Router } from "express";
import { UserController } from "../controllers/userController";
import { DocumentController } from "../controllers/documentController";
import { AdminController } from "../controllers/adminController";
import { adminAuthenticated } from "../middleware/adminAuth";

const router = Router();
const userController = new UserController();
const documentController = new DocumentController();
const adminController = new AdminController();

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

router.post("/document", async (req: Request, res: Response) => {
  await documentController.createDocument(req, res);
});
router.get("/documents", async (req: Request, res: Response) => {
  await documentController.findAll(req, res);
});

router.delete("/document/:id", async (req: Request, res: Response) => {
  await documentController.deleDocument(req, res);
});
router.patch("/document/:id", async (req: Request, res: Response) => {
  await documentController.updateDocument(req, res);
});

router.post("/login", async (req, res) => {
  await adminController.login(req, res);
});
export { router };
