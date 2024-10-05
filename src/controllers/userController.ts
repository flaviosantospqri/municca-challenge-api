import { Request, Response } from "express";
import { prismaClient } from "../database/prismaClient";

export class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    console.log(request.body);
    const { name, email } = request.body;
    const user = await prismaClient.user.create({
      data: {
        email,
        name,
      },
    });
    return response.json(user);
  }
}
