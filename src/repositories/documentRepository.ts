import { prismaClient } from "../database/prismaClient";
import { DocumentDto } from "../dtos/documentDto";

export class DocumentRepository {
  async createDocument(data: DocumentDto) {
    return await prismaClient.document.create({
      data,
    });
  }

  async findAll() {
    return await prismaClient.document.findMany({ include: { user: true } });
  }

  async findDocumentById(id: string) {
    return await prismaClient.document.findFirst({
      where: { id },
      include: { user: true },
    });
  }

  async deleteDocument(id: string) {
    return await prismaClient.document.delete({ where: { id } });
  }

  async updateDocument(id: string, data: Partial<DocumentDto>) {
    return await prismaClient.document.update({
      where: { id },
      data,
    });
  }
}
