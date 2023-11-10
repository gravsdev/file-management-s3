import {
  getFileS3,
  getFileUrlS3,
  getFilesS3,
  removeFileS3,
} from "../utils/s3.js";

class ServiceFile {
  async removeSingle(credentials, filename) {
    try {
      return await removeFileS3(filename, credentials);
    } catch (error) {
      throw error;
    }
  }

  async getAllFiles(credentials) {
    try {
      return await getFilesS3(credentials);
    } catch (error) {
      throw error;
    }
  }

  async getFileUrl(credentials, filename) {
    try {
      return await getFileUrlS3(filename, credentials);
    } catch (error) {
      throw error;
    }
  }
}

export default new ServiceFile();
