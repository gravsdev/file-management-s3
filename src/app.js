import express from "express";
import cors from "cors";
import { router } from "./router/index.js";
import {
  handleMulterError,
  handleError,
  unknownEndpoint,
} from "./middleware/error.js";
import { env } from "./config/environment.js";

const app = express();
app.use(
  cors({
    origin: env.server.ALLOWED_ORIGINS,
    methods: env.server.ALLOWED_METHODS,
    allowedHeaders: env.server.ALLOWED_HEADERS,
  })
);
app.use(express.json());
app.use(router);
app.use(handleMulterError);
app.use(unknownEndpoint);
app.use(handleError);

export default app;
