import error from '../../cms/common';

export default function errorHandler(err, req, res) {
  const { message, status } = err;
  res.json({
    error: message || error.undefinedError,
    status || 500,
  });
}
