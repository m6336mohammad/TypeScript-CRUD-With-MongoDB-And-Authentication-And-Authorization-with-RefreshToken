import winston from "winston";

export const emailLoginLogger = winston.createLogger({
    level: "info",  // Log only "motorOnOff" level
    format: winston.format.combine(
        winston.format.timestamp({ format: "YYYY-MM-DD HH-mm-ss" }),
        winston.format.printf(info => `${info.timestamp} ${info.level} : ${info.message}` ),
    ),
    transports: [
        new winston.transports.File({ filename: "./logs/emailLoginLogger/emailLoginLogger.log", level: "info", maxsize: 100 * 1024, maxFiles: 5 }),
    ],

});
