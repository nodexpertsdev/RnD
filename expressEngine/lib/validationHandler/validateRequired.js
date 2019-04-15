const validateReqData = (data = {}, required = []) => {
  const retVal = {};
  required.forEach((field) => {
    if (!(data[field] || data[field] === false || data[field] === 0)) {
      const fieldKey = field.charAt(0).toUpperCase() + field.slice(1);
      retVal[field] = `${fieldKey} is required.`;
    }
  });
  return retVal;
};
export default validateReqData;
