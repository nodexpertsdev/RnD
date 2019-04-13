export default function errorHanlder(err, req, res, next) {
  const { message, status } = err;
  
  res.status(status).json({
    error: 'true',
    message: message || 'null',
    status: status || 500,
  });
}
