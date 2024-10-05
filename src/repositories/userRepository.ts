import { CreateUserDto } from "../dtos/userDto";
import { prismaClient } from "../database/prismaClient";

export class UserRepository {
  async createUser(data: CreateUserDto) {
    return await prismaClient.user.create({
      data,
    });
  }

  async findAll() {
    return await prismaClient.user.findMany({ include: { documents: true } });
  }

  async findUserById(id: string) {
    return await prismaClient.user.findFirst({
      where: { id },
      include: { documents: true },
    });
  }

  async deleteUser(id: string) {
    return await prismaClient.$transaction([
      prismaClient.document.deleteMany({ where: { userId: id } }),
      prismaClient.user.delete({ where: { id } }),
    ]);
  }

  async updateUser(id: string, data: Partial<CreateUserDto>) {
    return await prismaClient.user.update({
      where: { id },
      data,
    });
  }
}
