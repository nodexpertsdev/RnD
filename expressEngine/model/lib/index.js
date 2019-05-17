class ModelLib {
  constructor() {
    this.roleEnum = ['system-admin', 'supplier'];
  }

  orderStatus =() => ['confirmed', 'shipped', 'inDelivery', 'delivered', 'closed'];

  validateEmail = (email) => {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  validatePassword = (password) => {
    const re = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~])[A-Za-z\d!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]{8,50}$/;
    return re.test(String(password));
  };

  validateContactNumber = (contactNo) => {
    var re = /^[0-9]{10}$/
    return re.test(contactNo)
  }
}

export default new ModelLib();
