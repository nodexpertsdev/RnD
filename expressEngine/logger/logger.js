// import winston
import { createLogger, format, transports } from 'winston';

const logger = () => {
  const {
    combine, timestamp, json, colorize, simple,
  } = format;

  // setup logger
  const error = createLogger({
    level: 'error',
    format: combine(
      timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
      }),
      json(),
    ),
    defaultMeta: { service: 'user-service' },
    transports: [
      new transports.Console({
        format: combine(colorize(), simple()),
      }),
      new transports.File({
        filename: 'logs/error.log',
        level: 'error',
      }),
    ],
  });

  const warn = createLogger({
    level: 'warn',
    format: combine(
      timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
      }),
      json(),
    ),
    defaultMeta: { service: 'user-service' },
    transports: [
      new transports.Console({
        format: combine(colorize(), simple()),
      }),
      new transports.File({
        filename: 'logs/warn.log',
        level: 'warn',
      }),
    ],
  });

  const info = createLogger({
    level: 'info',
    format: combine(
      timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
      }),
      json(),
    ),
    defaultMeta: { service: 'user-service' },
    transports: [
      new transports.Console({
        format: combine(colorize(), simple()),
      }),
      new transports.File({
        filename: 'logs/info.log',
        level: 'info',
      }),
    ],
  });

  const verbose = createLogger({
    level: 'verbose',
    format: combine(
      timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
      }),
      json(),
    ),
    defaultMeta: { service: 'user-service' },
    transports: [
      new transports.Console({
        format: combine(colorize(), simple()),
      }),
      new transports.File({
        filename: 'logs/verbose.log',
        level: 'verbose',
      }),
    ],
  });

  const debug = createLogger({
    level: 'debug',
    format: combine(
      timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
      }),
      json(),
    ),
    defaultMeta: { service: 'user-service' },
    transports: [
      new transports.Console({
        format: combine(colorize(), simple()),
      }),
      new transports.File({
        filename: 'logs/debug.log',
        level: 'debug',
      }),
    ],
  });

  const silly = createLogger({
    level: 'silly',
    format: combine(
      timestamp({
        format: 'YYYY-MM-DD HH:mm:ss',
      }),
      json(),
    ),
    defaultMeta: { service: 'user-service' },
    transports: [
      new transports.Console({
        format: combine(colorize(), simple()),
      }),
      new transports.File({
        filename: 'logs/silly.log',
        level: 'silly',
      }),
    ],
  });
  const winstonLogger = {
    error, warn, info, verbose, debug, silly,
  };
  return winstonLogger;
};

export default logger;
