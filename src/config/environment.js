import "dotenv/config";

export const env = {
  server: {
    PORT: process.env.SERVER_PORT || 8080,
    ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS || "*",
    ALLOWED_METHODS: process.env.ALLOWED_METHODS || "GET",
    ALLOWED_HEADERS: process.env.ALLOWED_HEADERS || "Content-Type",
  },
  token: {
    SECRET_KEY_S3: process.env.SECRET_KEY_S3 || "my-secret-key",
  },
};
