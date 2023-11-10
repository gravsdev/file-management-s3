import jwt from "jsonwebtoken";
import { Unauthorized } from "../utils/error.js";
import { env } from "../config/environment.js";

function checkTokenS3(req, res, next) {
  try {
    const token = req.headers.secretkeys3;
    const credentials = jwt.verify(token, env.token.SECRET_KEY_S3);

    req.s3 = credentials;
    next();
  } catch (error) {
    if (error instanceof jwt.JsonWebTokenError) {
      throw new Unauthorized("The token is not valid.");
    }

    throw error;
  }
}

export { checkTokenS3 };
