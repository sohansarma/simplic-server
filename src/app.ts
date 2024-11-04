import express from "express";
import bodyParser from "body-parser";
import morgan from "morgan";
import routes from "./routes/appRoutes";
import { errors } from "celebrate";

const app = express();

// Middleware
app.use(bodyParser.json());

morgan.format(
  "logFormat",
  ':remote-addr - :method :url - :status - :response-time s ":remote-user" "HTTP/:http-version" ":res[content-length]" ":referrer" ":user-agent" :req[header] :res[header]'
);
app.use(morgan("logFormat")); // Add morgan middleware for logging

// Routes
app.use("/", routes);

// Celebrate error handler
app.use(errors());

export default app;
