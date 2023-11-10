import {
  GetObjectCommand,
  PutObjectCommand,
  DeleteObjectCommand,
  S3Client,
  ListObjectsCommand,
} from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";
import fs from "fs";

async function uploadFileS3(file, credentials) {
  const ext = file.originalname.split(".").pop();
  const filename = `${file.filename}.${ext}`;
  const stream = fs.createReadStream(file.path);
  const command = new PutObjectCommand({
    Bucket: credentials.bucket,
    Key: filename,
    Body: stream,
  });

  const client = new S3Client({
    region: credentials.region,
    credentials: {
      accessKeyId: credentials.accessKeyId,
      secretAccessKey: credentials.secretAccessKey,
    },
  });

  const data = await client.send(command);
  return { filename, data };
}

async function removeFileS3(filename, credentials) {
  const client = new S3Client({
    region: credentials.region,
    credentials: {
      accessKeyId: credentials.accessKeyId,
      secretAccessKey: credentials.secretAccessKey,
    },
  });

  const command = new DeleteObjectCommand({
    Bucket: credentials.bucket,
    Key: filename,
  });

  const data = await client.send(command);
  return data;
}

async function getFilesS3(credentials) {
  const client = new S3Client({
    region: credentials.region,
    credentials: {
      accessKeyId: credentials.accessKeyId,
      secretAccessKey: credentials.secretAccessKey,
    },
  });

  const command = new ListObjectsCommand({
    Bucket: credentials.bucket,
  });

  const data = await client.send(command);
  return data;
}

async function getFileS3(filename, credentials) {
  const client = new S3Client({
    region: credentials.region,
    credentials: {
      accessKeyId: credentials.accessKeyId,
      secretAccessKey: credentials.secretAccessKey,
    },
  });

  const command = new GetObjectCommand({
    Bucket: credentials.bucket,
    Key: filename,
  });

  const data = await client.send(command);
  return data;
}

async function getFileUrlS3(filename, credentials) {
  const client = new S3Client({
    region: credentials.region,
    credentials: {
      accessKeyId: credentials.accessKeyId,
      secretAccessKey: credentials.secretAccessKey,
    },
  });

  const command = new GetObjectCommand({
    Bucket: credentials.bucket,
    Key: filename,
  });

  const data = await getSignedUrl(client, command);
  return data;
}

export { uploadFileS3, removeFileS3, getFilesS3, getFileS3, getFileUrlS3 };
