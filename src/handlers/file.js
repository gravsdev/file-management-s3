import ServiceFile from "../service/file.js";

class HandlerFile {
  async removeSingle(req, res, next) {
    try {
      await ServiceFile.removeSingle(req.s3, req.params.filename);

      res.status(200).send({ message: "File deleted successfully." });
    } catch (error) {
      next(error);
    }
  }

  async getAllFiles(req, res, next) {
    try {
      const data = await ServiceFile.getAllFiles(req.s3);

      res.status(200).send({
        files: data.Contents,
        message: "All database files were recovered successfully.",
      });
    } catch (error) {
      next(error);
    }
  }

  async getFileUrl(req, res, next) {
    try {
      const data = await ServiceFile.getFileUrl(req.s3, req.params.filename);

      res
        .status(200)
        .send({ fileUrl: data, message: "Link of the image obtained." });
    } catch (error) {
      next(error);
    }
  }
}

export default new HandlerFile();
