const healthCheck = (req, res) => {
  res.status(200).json({
    status: 'ok',
    message: 'Health is good',
  });
};

export default healthCheck;
