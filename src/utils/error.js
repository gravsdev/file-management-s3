function createError(code, status, icon) {
  return class {
    constructor(message) {
      this.code = code;
      this.status = status;
      this.message = `${icon} ${message}`;
    }
  };
}

export const UnexpectedError = createError("INTERNAL_SERVER_ERROR", 500, "🛠️");
export const NotFound = createError("NOT_FOUND", 404, "🕵️");
export const Forbidden = createError("FORBIDDEN", 403, "🔒");
export const Unauthorized = createError("UNAUTHORIZED", 401, "🔑");
export const BadRequest = createError("BAD_REQUEST", 400, "❌");
