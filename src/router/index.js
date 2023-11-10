import { Router } from "express";
import image from "./image.js";
import file from "./file.js";

const router = Router();

router.use("/s3/image", image);
router.use("/s3/file", file);

export { router };
