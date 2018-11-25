import userData from './../constants/userData';


const emulateServerRequest = (response) => () => {
  return new Promise((resolve, reject) => {
    // setTimeout(() => reject("No domain server access"), RESPONSE_EMULATION_TIME);  // for error emulation
    setTimeout(() => resolve(response), 3000);
  });
};

export const fetchUserData = emulateServerRequest(userData);

export const emulateAccountUpdateServerRequest = (newBalanceSnapshot) => {
  return new Promise((resolve, reject) => {
    const RESPONSE_SUCCESS = {
      status: 200,
      message: 'User balance successfully updated',
      balance: { ...newBalanceSnapshot }
    };
    const RESPONSE_ERROR = {
      status: 500,
      message: 'Service temporary unavailable'
    };
    setTimeout(() => resolve(RESPONSE_SUCCESS), 1800);
    // setTimeout(() => reject(RESPONSE_ERROR), 2400)  // for error emulation
  });
};
