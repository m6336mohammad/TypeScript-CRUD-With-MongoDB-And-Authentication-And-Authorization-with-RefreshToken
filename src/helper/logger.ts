import winston from "winston";

export default winston.createLogger({
  level: "info",
  format: winston.format.combine(
    winston.format.timestamp({ format: "YYYY-MM-DD HH-mm-ss" }),
    winston.format.printf(info => `${info.timestamp} ${info.level} : ${info.message}` ),
  ),
  transports: [
    new winston.transports.Console({
        format: winston.format.combine(
            winston.format.colorize(),
            winston.format.printf(info => `${info.timestamp} ${info.level} : ${info.message}` ),
        )
    }),
    new winston.transports.File({filename: "./logs/error.log",level: "error",maxsize:100 * 1024,maxFiles:5}),
    new winston.transports.File({ filename: "./logs/info.log", level: "info",maxsize:100 * 1024,maxFiles:5 }),
    new winston.transports.File({ filename: "./logs/warn.log", level: "warn" ,maxsize:100 * 1024,maxFiles:5}),
  ],
});
