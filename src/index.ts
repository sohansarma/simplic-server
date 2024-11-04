import express from "express";
import dbService from "./db";
import http from "http";
import { HTTP_PORT } from "./keys";
import app from "./app";
import logger from "./utils/logger";

(async () => {
  try {
    await dbService.connect();
    const httpServer = http.createServer(app);
    httpServer.listen(HTTP_PORT, () => {
      logger.info(`Server is running on http://localhost:${HTTP_PORT}`);
    });
  } catch (error) {
    logger.error("Unable to start server: ", error);
  }
})();

export default app;
