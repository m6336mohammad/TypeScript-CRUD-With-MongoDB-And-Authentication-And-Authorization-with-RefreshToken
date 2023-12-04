import winston from "winston";

export default winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH-mm-ss" }),
    winston.format.printf(info => `${info.timestamp} ${info.level} : ${info.message}` ),
  )
});
