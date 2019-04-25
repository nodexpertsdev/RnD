class RouteHelper {
  /**
   * @desc To get the live route
   * @param prefix string
   *
   * @return string
   */
  static liveRoute(prefix = '') {
    const route = 'health-check';
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
    res.send('I am OK');
  }

  /**
   * @desc To handle the live request
   * @param req request object
   * @param res response object
   *
   * @return res
   */
  static notFound(req, res) {
    res.status(404).send({ error: 'Route not found' });
  }
}

export default RouteHelper;
