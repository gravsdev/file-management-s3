import multer from "multer";
import crypto from "crypto";
import { BadRequest } from "../utils/error.js";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, `${process.cwd()}/uploads`);
  },
  filename: (req, file, cb) => {
    cb(null, `file-${Date.now()}_${crypto.randomUUID()}`);
  },
});

const uploadImage = multer({
  storage: storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowedMimeTypes = [
      "image/jpeg",
      "image/jpg",
      "image/png",
      "image/gif",
      "image/svg+xml",
    ];

    if (allowedMimeTypes.includes(file.mimetype)) {
      cb(null, true);
    } else cb(new BadRequest("Unsupported file type."), false);
  },
});

export { uploadImage };
