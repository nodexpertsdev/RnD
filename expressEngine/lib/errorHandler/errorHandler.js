import error from '../../cms/common';

export default function errorHandler(err, req, res, next) {
  console.log(':::::::::::::ERROR::::::::::::::::::', typeof err, err);

  const { message, status } = err;
  console.log(':::::::::::::::::::::::error::::::::::::::', JSON.stringify(err, Object.getOwnPropertyNames(err)));
  console.log('::::::::::::::MESSAGE:::::::::::::::', JSON.stringify(message));
  res.json({
    error: message || error.undefinedError,
    status: status || 500,
  });
}
