import fs from "fs";
import { BadRequest } from "../utils/error.js";
import { uploadFileS3 } from "../utils/s3.js";

class ServiceImage {
  async createMultiple(credentials, files) {
    try {
      if (!files) {
        throw new BadRequest("Images are not provided.");
      }

      const data = [];
      for (const file of files) {
        const { filename: filenameS3 } = await uploadFileS3(file, credentials);
        fs.unlinkSync(file.path);
        data.push(filenameS3);
      }

      return data;
    } catch (error) {
      throw error;
    }
  }

  async createSingle(credentials, file) {
    try {
      if (!file) {
        throw new BadRequest("The image was not provided.");
      }

      const { filename } = await uploadFileS3(file, credentials);
      fs.unlinkSync(file.path);

      return filename;
    } catch (error) {
      throw error;
    }
  }
}

export default new ServiceImage();
