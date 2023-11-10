import { Router } from "express";
import { uploadImage } from "../middleware/image.js";
import { checkTokenS3 } from "../middleware/auth.js";
import HandlerImage from "../handlers/image.js";

const router = Router();

router.post(
  "/up/multiple",
  uploadImage.array("image"),
  checkTokenS3,
  HandlerImage.createMultiple
);
router.post(
  "/up/single",
  uploadImage.single("image"),
  checkTokenS3,
  HandlerImage.createSingle
);

export default router;
