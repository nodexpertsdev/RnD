const authMiddleware = (req, res, next) => {
  const { headers } = req;
  if (headers.authkey !== process.env.KEY) {
    return res.status(403).json({
      error: true,
      message: 'Forbidden',
    });
  }
  next();
};

export default authMiddleware;
