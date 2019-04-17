class UserHelper {
  getProjection = () => {
    const projection = {
      email: 1,
      role: 1,
      companyName: 1,
    };
    return projection;
  };
}

export default new UserHelper();
