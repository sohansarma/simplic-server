import { Request, Response } from "express";
import AuthManager from "../../manager/auth/auth.manager";
import { formatResponse } from "../../utils/helper";

export async function me(request: Request, response: Response) {
  const result: any = await new AuthManager(request).me();
  return response.status(200).json(formatResponse(200, null, result));
}

export async function fetch(request: Request, response: Response) {
  const result: any = await new AuthManager(request).fetch();
  return response.status(200).json(formatResponse(200, null, result));
}

export async function create(request: Request, response: Response) {
  const result: any = await new AuthManager(request).create();
  return response.status(200).json(formatResponse(200, null, result));
}
