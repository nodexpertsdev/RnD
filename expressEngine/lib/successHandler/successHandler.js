export default function successHandler(message, data = null, status) {
  return ({
    data,
    message,
    status,
  });
}
