import { UserRepository } from "../repositories/userRepository";
import { CreateUserDto } from "../dtos/userDto";

export class UserService {
  private userRepository = new UserRepository();

  async createUser(data: CreateUserDto) {
    return await this.userRepository.createUser(data);
  }

  async getUserWithDocuments(id: string) {
    return await this.userRepository.findUserById(id);
  }

  async findAllUsers() {
    return await this.userRepository.findAll();
  }

  async deleteUser(id: string) {
    return await this.userRepository.deleteUser(id);
  }

  async updateUser(id: string, data: Partial<CreateUserDto>) {
    return await this.userRepository.updateUser(id, data);
  }
}
