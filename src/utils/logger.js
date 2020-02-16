const { createLogger, transports, format } = require("winston");

const logger = createLogger({
  format: format.combine(
    format.timestamp({ format: "YYYY-MM-DD HH:mm:ss:ms" }),
    format.printf(info => `${info.timestamp} ${info.level}: ${info.message}`)
  ),
  transports: [
    new transports.File({
      filename: `${process.env.PWD}/public/assets/log.txt`,
      json: false,
      maxsize: 5242880,
      maxFiles: 5
    }),
    new transports.Console({
      colorize: true
    })
  ]
});

module.exports = {
  logger
};
