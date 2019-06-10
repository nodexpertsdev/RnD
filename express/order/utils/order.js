class OrderHelper {
  getProjection = () => {
    const projection = {
      _id: 0,
      orderNumber: 1,
      status: 1,
      supplierId: 1,
      unitPrice: 1,
    };
    return projection;
  };
}

export default new OrderHelper();
