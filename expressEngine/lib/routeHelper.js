class RouteHelper {
  /**
   * @desc To get the live route
   * @param prefix string
   *
   * @return string
   */
  static liveRoute(prefix = "") {
    const route = "live";
    if (prefix) {
      return `/${prefix}/${route}`;
    }
    return `/${route}`;
  }

  /**
   * @desc To handle the live request
   * @param req request object
   * @param res response object
   *
   * @return res
   */
  static liveRequest(req, res) {
    res.send(true);
  }
  
  /**
   * @desc To handle the live request
   * @param req request object
   * @param res response object
   *
   * @return res
   */
  static notFound(req, res) {
    res.status(404).json({
      error: "Route Not Found"
    });
  };
};

export default new RouteHelper();
