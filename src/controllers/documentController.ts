import { Request, Response } from "express";
import { DocumentService } from "../services/documentService";
import { DocumentDto } from "../dtos/documentDto";

export class DocumentController {
  documentService = new DocumentService();

  async createDocument(req: Request, res: Response): Promise<Response> {
    const { name, status, userId }: DocumentDto = req.body;

    const document = await this.documentService.createDocument({
      name,
      status,
      userId,
    });
    return res.json(document);
  }

  async findAll(req: Request, res: Response): Promise<Response> {
    const response = await this.documentService.findAllDocument();
    return res.json(response);
  }

  async deleDocument(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    await this.documentService.deleDocument(id);
    return res.json({ message: "Document is deleted" });
  }

  async updateDocument(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const { name, status, userId }: DocumentDto = req.body;
    const response = await this.documentService.updateDocument(id, {
      name,
      status,
      userId,
    });
    return res.json(response);
  }
}
