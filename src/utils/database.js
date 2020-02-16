const { connect } = require("mongoose");

async function startConnection() {
  await connect(
    "mongodb://jaya-node:jaya-node123@ds251948.mlab.com:51948/jaya-nodejs",
    {
      useNewUrlParser: true,
      useFindAndModify: true,
      useUnifiedTopology: true
    }
  );

  console.log("Database Connected");
}

module.exports.startConnection = startConnection;
