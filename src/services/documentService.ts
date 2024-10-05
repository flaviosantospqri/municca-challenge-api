import { DocumentDto } from "../dtos/documentDto";
import { DocumentRepository } from "../repositories/documentRepository";

export class DocumentService {
  private documentRepository = new DocumentRepository();

  async createDocument(data: DocumentDto) {
    return await this.documentRepository.createDocument(data);
  }

  async findAllDocument() {
    return await this.documentRepository.findAll();
  }
  async deleDocument(id: string) {
    return await this.documentRepository.deleteDocument(id);
  }

  async updateDocument(id: string, data: Partial<DocumentDto>) {
    return await this.documentRepository.updateDocument(id, data);
  }
}
