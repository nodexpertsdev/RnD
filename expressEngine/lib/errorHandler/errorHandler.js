export default function errorHanlder(err, req, res) {
  const { message, status } = err;
  
  res.status(status).json({
    error: true,
    message: message || null,
    status: status || 500,
  });
}
