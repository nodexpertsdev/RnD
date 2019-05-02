import { createLogger, format, transports } from 'winston';
import moment from 'moment';

const {
  combine, colorize, simple,
} = format;

const getDetailsFromFile = (fileDetails) => {
  const fileAndRow = fileDetails
    .split('at ').pop()
    .split('(').pop()
    .replace(')', '')
    .split(':');

  const date = moment(new Date()).format('dddd, MMMM Do YYYY, h:mm:ss a');

  const detailsFromFile = {
    date,
    file: fileAndRow[0],
    line: fileAndRow[1],
    row: fileAndRow[2],
  };

  detailsFromFile.formattedInfos = Object.keys(detailsFromFile).reduce((previous, key) => `${previous}`
    + '\t'
    + `${key}: `
    + `${detailsFromFile[key]}`
    + '\n',
  '\n');

  return detailsFromFile;
};

const formatter = (options, meta) => {
  const detailsFromFile = getDetailsFromFile(meta);
  return (
    `${options}`
    + `${detailsFromFile.formattedInfos}`
  );
};

const transport = {
  console: new transports.Console({
    level: 'warn',
    format: combine(colorize(), simple()),
  }),
};

// setup logger
const userLogger = createLogger({
  format: combine(colorize(), simple()),
  transports: [
    transport.console,
  ],
});

const logger = {};

logger.info = function (msg, meta) {
  transport.console.level = 'info';
  userLogger.info(formatter(msg, meta));
};

logger.error = function (msg, meta) {
  transport.console.level = 'error';
  userLogger.error(formatter(msg, meta));
};

logger.warn = function (msg, meta) {
  transport.console.level = 'warn';
  userLogger.warn(formatter(msg, meta));
};

logger.verbose = function (msg, meta) {
  transport.console.level = 'verbose';
  userLogger.verbose(formatter(msg, meta));
};

logger.debug = function (msg, meta) {
  transport.console.level = 'debug';
  userLogger.debug(formatter(msg, meta));
};

logger.silly = function (msg, meta) {
  transport.console.level = 'silly';
  userLogger.silly(formatter(msg, meta));
};

export default logger;
