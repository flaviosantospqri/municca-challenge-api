import { Request, Response } from "express";
import { AdminService } from "../services/adminService";

export class AdminController {
  private adminService = new AdminService();

  async login(req: Request, res: Response) {
    const { email, password } = req.body;

    try {
      const token = await this.adminService.login({ email, password });
      return res.json(token);
    } catch (error) {
      return res.status(401).json({ message: "Invalid Credentials" });
    }
  }
}
