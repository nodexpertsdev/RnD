export default function errorHandler(err, req, res) {
  const { message } = err;
  res.json({
    error: message || 'Got some error',
  });
}
