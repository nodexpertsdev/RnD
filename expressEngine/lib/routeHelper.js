class RouteHelper {
  healthCheck = (req, res) => {
    res.status(200).json({
      status: 'ok',
      message: 'Health is good'
    });
  };
  
  notFoundRoute = (req, res) => {
    res.status(404).json({
      error: 'Not Found',
      status: 404,
      message: 'Route Not Found'
    });
  };
};

export default new RouteHelper();
