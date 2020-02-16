const app = require("./app");
const { startConnection } = require("./utils/database");

async function main() {
  await startConnection();
  const PORT = app.get("port");
  await app.listen(PORT);

  console.log(`Server Running on http://localhost:${PORT}`);
}

main();
