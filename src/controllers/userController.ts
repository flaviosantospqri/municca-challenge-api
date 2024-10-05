import { Request, Response } from "express";
import { UserService } from "../services/userService";
import { CreateUserDto } from "../dtos/userDto";

export class UserController {
  userService = new UserService();

  async createUser(req: Request, res: Response): Promise<Response> {
    const { name, email }: CreateUserDto = req.body;
    const user = await this.userService.createUser({ name, email });

    return res.json(user);
  }

  async getUserWithDocument(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const user = await this.userService.getUserWithDocuments(id);

    return res.json(user);
  }

  async findAllUsers(req: Request, res: Response): Promise<Response> {
    const users = await this.userService.findAllUsers();

    return res.json(users);
  }

  async deleteUser(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    await this.userService.deleteUser(id);

    return res.json({
      message: "User and associated documents deleted successfully",
    });
  }

  async updateUser(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, email } = req.body;
    const updatedUser = await this.userService.updateUser(id, { name, email });
    return res.json(updatedUser);
  }
}
