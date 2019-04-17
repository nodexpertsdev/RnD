import error from '../../cms/common';

export default function errorHandler(err, req, res, next) {
  const { message, status } = err;
  res.json({
    error: message || error.undefinedError,
    status: status || 500,
  });
}
