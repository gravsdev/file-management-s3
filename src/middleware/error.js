import multer from "multer";
import { BadRequest, NotFound } from "../utils/error.js";

function handleMulterError(error, req, res, next) {
  try {
    if (error) {
      // console.log(error);
      if (error instanceof multer.MulterError) {
        if (error.code === "LIMIT_FILE_SIZE") {
          throw new BadRequest("The file size exceeds the limit.");
        } else if (error.code === "LIMIT_UNEXPECTED_FILE") {
          throw new BadRequest("The file field name is unknown.");
        }
      }

      throw error;
    }

    next();
  } catch (error) {
    next(error);
  }
}

function handleError(error, req, res, next) {
  res.status(error.status || 500).send({
    failure: { code: error.code, message: error.message },
  });

  next();
}

function unknownEndpoint(req, res) {
  throw new NotFound(`Unknown endpoint ${req.method} ${req.url}`);
}

export { handleMulterError, handleError, unknownEndpoint };
