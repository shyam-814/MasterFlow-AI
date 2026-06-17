import { createLogger, format, transports } from "winston";

const devFormat = format.combine(
  format.colorize(), // adds colors per log level
  format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }),
  format.printf(({ timestamp, level, message, ...meta }) => {
    const metaString = Object.keys(meta).length ? JSON.stringify(meta) : "";
    return `[${timestamp}] ${level}: ${message} ${metaString}`;
  })
);

export const logger = createLogger({
  level: "debug",
  format: format.combine(format.timestamp(), format.json()), // default (prod)
  transports: [
    new transports.Console({
      format: process.env.NODE_ENV === "production" ? format.json() : devFormat
    }),
  ],
});
