import { createLogger, format, transports } from 'winston';

const {
  combine, colorize, simple, location
} = format;

const transport = {
  console: new transports.Console({
    format: combine(colorize(), simple()),
    level: 'warn'
  }),
};

// setup logger
const userLogger = createLogger({
  transports: [
    transport.console,
  ]
});

const logger = {};

logger.info = function(msg) {
  transport.console.level = 'info';
  var message = new Date().toString() + " : " + msg + "\n";
  userLogger.info(message);
};

logger.error = function(msg) {
  transport.console.level = 'error';
  var message = new Date().toString() + " : " + msg + "\n";
  userLogger.error(message);
};

logger.warn = function(msg) {
  transport.console.level = 'warn';
  var message = new Date().toString() + " : " + msg + "\n";
  userLogger.warn(message);
};

logger.verbose = function(msg) {
  transport.console.level = 'verbose';
  var message = new Date().toString() + " : " + msg + "\n";
  userLogger.verbose(message);
};

logger.debug = function(msg) {
  transport.console.level = 'debug';
  var message = new Date().toString() + " : " + msg + "\n";
  userLogger.debug(message);
};

logger.silly = function(msg) {
  transport.console.level = 'silly';
  var message = new Date().toString() + " : " + msg + "\n";
  userLogger.silly(message);
};

export default logger;
