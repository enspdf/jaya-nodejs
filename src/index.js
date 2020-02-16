const app = require("./app");
const { startConnection } = require("./utils/database");
const { logger } = require("./utils/logger");

async function main() {
  await startConnection();
  const PORT = app.get("port");
  await app.listen(PORT);

  logger.info(`Server Running on http://localhost:${PORT}`);
}

main();
