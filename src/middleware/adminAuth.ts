import { NextFunction, Request, Response } from "express";

import jwt from "jsonwebtoken";

export const adminAuthenticated = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authHeader = req.headers.authorization;

  if (authHeader) {
    return res.status(401).json({ error: "token is missing" });
  }

  const parts = authHeader?.split(" ");

  if (parts?.length !== 2 || parts[0] !== "Bearer") {
    return res.status(401).json({ error: "Token malformatted" });
  }

  const token = parts[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as {
      role: string;
    };

    if (decoded.role !== "admin") {
      return res.status(403).json({ error: "Access Denied" });
    }

    return next;
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
};
