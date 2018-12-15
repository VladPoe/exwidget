import userData from './../constants/userData';


const emulateServerRequest = (response) => () => {
  return new Promise((resolve, reject) => {
    // setTimeout(() => reject('No access'), 2800);  // for error emulation
    setTimeout(() => resolve(response), 1800);
  });
};

export const fetchUserData = emulateServerRequest(userData);

export const emulateAccountUpdateServerRequest = (newBalanceSnapshot) => {
  return new Promise((resolve, reject) => {
    const SUCCESS_RESPONSE = {
      status: 200,
      message: 'Yor balance successfully updated',
      balance: { ...newBalanceSnapshot }
    };
    const ERROR_RESPONSE = { // eslint-disable-line no-unused-vars
      status: 500,
      message: 'Service is temporary unavailable'
    };
    // setTimeout(() => reject(ERROR_RESPONSE), 2400)  // for error emulation
    setTimeout(() => resolve(SUCCESS_RESPONSE), 1200);
  });
};
