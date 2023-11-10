import ServiceImage from "../service/image.js";

class HandlerImage {
  async createMultiple(req, res, next) {
    try {
      const data = await ServiceImage.createMultiple(req.s3, req.files);

      res.status(201).send({ filenames: data, message: "Images uploaded." });
    } catch (error) {
      next(error);
    }
  }

  async createSingle(req, res, next) {
    try {
      const data = await ServiceImage.createSingle(req.s3, req.file);

      res.status(201).send({ filename: data, message: "Uploaded image." });
    } catch (error) {
      next(error);
    }
  }
}

export default new HandlerImage();
