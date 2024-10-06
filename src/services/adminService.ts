import { AdminDto } from "../dtos/adminDto";
import { AdminRepository } from "../repositories/adminRepository";
import jwt from "jsonwebtoken";

export class AdminService {
  private adminRepository = new AdminRepository();

  async login({ email, password }: AdminDto): Promise<string> {
    const admin = await this.adminRepository.findAdminByEmail(email);

    if (!admin || admin?.password !== password) {
      throw new Error("Invalid Credentials");
    }

    const token = jwt.sign(
      { role: "admin" },
      process.env.JWT_SECRET as string,
      {
        expiresIn: process.env.JWT_EXPIRATION,
      }
    );
    return token;
  }
}
