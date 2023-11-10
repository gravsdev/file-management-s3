import app from "./app.js";
import { env } from "./config/environment.js";

app.listen(env.server.PORT, () =>
  console.log(`Server on port ${env.server.PORT}`)
);
