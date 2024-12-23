import { Request, Response } from "express";
import AnalyticsManager from "../../manager/social-media/analytics.manager";
import { formatResponse } from "../../utils/helper";

export async function fetch(request: Request, response: Response) {
  const result: any = await new AnalyticsManager(request).fetch();
  return response.status(200).json(formatResponse(200, null, result));
}
