import { Router } from "express";
import { checkTokenS3 } from "../middleware/auth.js";
import HandlerFile from "../handlers/file.js";

const router = Router();

router.get("/all", checkTokenS3, HandlerFile.getAllFiles);
router.get("/url/:filename", checkTokenS3, HandlerFile.getFileUrl);
router.delete("/rm/:filename", checkTokenS3, HandlerFile.removeSingle);

export default router;
